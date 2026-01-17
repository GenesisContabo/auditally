"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: name.toLowerCase() }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm",
        highlighted
          ? "border-[var(--accent)] shadow-lg"
          : "border-slate-200",
      )}
    >
      {highlighted ? (
        <span className="absolute right-6 top-6 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Most Popular
        </span>
      ) : null}
      <div className="flex-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {name}
        </p>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-4xl font-bold text-[var(--primary)]">
            ${price}
          </span>
          <span className="text-sm text-slate-500">/month</span>
        </div>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        aria-label={`Start ${name} plan for $${price} per month`}
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition",
          highlighted
            ? "bg-[var(--primary)] text-white hover:bg-[#162c49]"
            : "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
          isLoading && "cursor-not-allowed opacity-70",
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Start plan"
        )}
      </button>
    </div>
  );
}
