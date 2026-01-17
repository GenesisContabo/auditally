import { cn } from "@/lib/utils";

const problems = [
  {
    title: "Regulatory Changes",
    description:
      "New requirements hit weekly, and it takes hours to understand what actually applies to your business.",
  },
  {
    title: "Manual Processes",
    description:
      "Spreadsheet tracking, email chains, and scattered files slow down every compliance cycle.",
  },
  {
    title: "Audit Stress",
    description:
      "Audits turn into fire drills because evidence is spread across teams and tools.",
  },
];

export default function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-[#f8fafc] py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d4a6f]">
            The Problem
          </p>
          <h2 id="problem-heading" className="mt-3 text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Compliance should not feel like a constant scramble.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={cn(
                "rounded-xl border border-slate-200 bg-white p-6 shadow-md",
              )}
            >
              <h3 className="text-lg font-semibold text-[#1e3a5f]">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
