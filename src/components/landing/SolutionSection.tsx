import { Shield, FileText, Bell, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Continuous Monitoring",
    description:
      "AI tracks regulatory updates across every jurisdiction you operate in.",
    icon: Shield,
  },
  {
    title: "Document Hub",
    description:
      "Keep policies, evidence, and approvals organized with instant search.",
    icon: FileText,
  },
  {
    title: "Smart Alerts",
    description:
      "Get notified when new rules impact your workflows or deadlines.",
    icon: Bell,
  },
  {
    title: "Compliance Assurance",
    description:
      "Stay audit-ready with clear status checks and automated reminders.",
    icon: CheckCircle,
  },
];

export default function SolutionSection() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b894]">
            The Solution
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Everything you need to stay ahead of compliance.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            AuditAlly unifies monitoring, documentation, and alerts so your team
            can respond faster with less effort.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md",
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6fbf6] text-[#00b894]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1e3a5f]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
