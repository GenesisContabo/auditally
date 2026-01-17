"use client";

import dynamic from "next/dynamic";

const ClerkSignUp = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignUp),
  { ssr: false }
);

export default function SignUpPage() {
  const hasClerkKey =
    typeof window !== "undefined" &&
    !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!hasClerkKey) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-[#1e3a5f]">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Authentication is being configured. Please check back soon.
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-md bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#162c49]"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <ClerkSignUp />
    </div>
  );
}
