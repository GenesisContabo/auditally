type ComplianceScoreCardProps = {
  score?: number;
};

export default function ComplianceScoreCard({ score = 87 }: ComplianceScoreCardProps) {
  const progressStyle = {
    background: `conic-gradient(#00b894 ${score * 3.6}deg, #e2e8f0 0deg)`,
  };

  const getStatusText = (s: number) => {
    if (s >= 80) return "Strong standing";
    if (s >= 60) return "Needs attention";
    return "Action required";
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Compliance Score
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e3a5f]">
            {getStatusText(score)}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Based on the latest audit checks and policy alignment.
          </p>
        </div>
        <div
          role="progressbar"
          aria-valuenow={score}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Compliance score: ${score} percent`}
          className="flex h-24 w-24 items-center justify-center rounded-full"
          style={progressStyle}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-semibold text-[#1e3a5f]">
            {score}%
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-[#f0f7f6] px-4 py-3 text-sm text-[#0f5f54]">
        Status: On track for next quarterly review.
      </div>
    </section>
  );
}
