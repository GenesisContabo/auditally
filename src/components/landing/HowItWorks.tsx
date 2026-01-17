import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Connect",
    description:
      "Securely link your policies, evidence repositories, and compliance frameworks.",
  },
  {
    title: "Monitor",
    description:
      "AuditAlly watches for regulatory changes and maps them to your controls.",
  },
  {
    title: "Stay Compliant",
    description:
      "Receive clear action items, evidence requests, and audit-ready reports.",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="bg-[#f8fafc] py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d4a6f]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Three steps to continuous compliance.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "rounded-xl border border-slate-200 bg-white p-6 shadow-md",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
