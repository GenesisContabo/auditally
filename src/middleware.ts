import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api/regulations(.*)",
  "/api/documents(.*)",
  "/api/compliance-score(.*)",
]);

export default function middleware(req: NextRequest) {
  // Check if Clerk is configured
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!hasClerkKey) {
    // Without Clerk, redirect protected routes to sign-in
    if (isProtectedRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    return NextResponse.next();
  }

  // With Clerk configured, use Clerk middleware
  return clerkMiddleware(async (auth, request) => {
    if (isProtectedRoute(request)) {
      await auth.protect();
    }
  })(req, {} as any);
}

export const config = {
  matcher: [
    "/dashboard(.*)",
    "/api/regulations(.*)",
    "/api/documents(.*)",
    "/api/compliance-score(.*)",
    "/sign-in(.*)",
    "/sign-up(.*)",
  ],
};
