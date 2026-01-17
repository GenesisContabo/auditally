import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api/regulations(.*)",
  "/api/documents(.*)",
  "/api/compliance-score(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/dashboard(.*)",
    "/api/regulations(.*)",
    "/api/documents(.*)",
    "/api/compliance-score(.*)",
  ],
};
