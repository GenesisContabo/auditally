import ComplianceScoreCard from "@/components/dashboard/ComplianceScoreCard";
import RecentChangesWidget from "@/components/dashboard/RecentChangesWidget";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          AuditAlly Dashboard
        </p>
        <h1 className="text-3xl font-semibold text-[#1e3a5f]">
          Welcome back, Alex
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Your compliance operations are running smoothly. Keep an eye on new
          regulations and upcoming evidence requests.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ComplianceScoreCard />
        <RecentChangesWidget />
      </div>
    </div>
  );
}
