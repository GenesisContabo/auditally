import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="get-started" className="bg-[#0f1f33] py-16">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Get Started
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Simplify Compliance?
        </h2>
        <p className="max-w-2xl text-base text-slate-200">
          Join teams that are replacing spreadsheets with a live compliance
          command center built for modern audits.
        </p>
        <Link
          href="/sign-up"
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00d9a5]",
          )}
        >
          Sign up for a demo
        </Link>
      </div>
    </section>
  );
}
