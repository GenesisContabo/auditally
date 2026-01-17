import PricingCard from "@/components/landing/PricingCard";

const pricingTiers = [
  {
    name: "Starter",
    price: "99",
    features: [
      "1 compliance framework",
      "Monthly update summaries",
      "Basic policy templates",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "249",
    highlighted: true,
    features: [
      "3 compliance frameworks",
      "Weekly regulatory updates",
      "Auto-updating handbooks",
      "Audit trail history",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "499",
    features: [
      "Unlimited frameworks",
      "Real-time monitoring",
      "Custom policy builder",
      "Team training sessions",
      "Dedicated compliance manager",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#f8fafc] py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Pick the compliance plan that fits your pace.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Upgrade whenever you are ready. Every plan includes onboarding and
            a dedicated success playbook.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              features={tier.features}
              highlighted={tier.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
