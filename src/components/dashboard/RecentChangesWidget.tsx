const changes = [
  {
    date: "Mar 12, 2026",
    title: "New SOC 2 evidence retention window extended to 24 months.",
  },
  {
    date: "Mar 05, 2026",
    title: "EU AI Act draft adds reporting requirements for high-risk models.",
  },
  {
    date: "Feb 26, 2026",
    title: "HIPAA audit logs now require weekly integrity checks.",
  },
];

export default function RecentChangesWidget() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Recent Changes
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e3a5f]">
            Regulatory updates
          </h2>
        </div>
        <span className="rounded-full bg-[#e6f7f3] px-3 py-1 text-xs font-semibold text-[#0f5f54]">
          This month
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {changes.map((change) => (
          <div
            key={change.title}
            className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {change.date}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700">
              {change.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
