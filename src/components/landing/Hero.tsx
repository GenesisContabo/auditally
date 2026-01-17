import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b894]">
            AI-Powered Compliance
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#1a1a2e] sm:text-5xl">
            Stop Playing Catch-Up with Regulations
          </h1>
          <p className="text-lg leading-relaxed text-[#64748b]">
            AuditAlly monitors regulatory updates 24/7, flags what matters, and
            keeps every audit-ready document organized in one secure workspace.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className={cn(
                "inline-flex items-center justify-center rounded-md bg-[#00b894] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00d9a5]",
              )}
            >
              Start Free Trial
            </a>
            <a
              href="#about"
              className={cn(
                "inline-flex items-center justify-center rounded-md border-2 border-[#1e3a5f] px-6 py-3 text-sm font-semibold text-[#1e3a5f] transition hover:bg-[#1e3a5f] hover:text-white",
              )}
            >
              Learn More
            </a>
          </div>
          <p className="text-sm text-[#64748b]">
            No credit card required. Setup in under 15 minutes.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 shadow-lg">
          <Image
            src="/hero.png"
            alt="AuditAlly compliance dashboard preview"
            width={760}
            height={560}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
