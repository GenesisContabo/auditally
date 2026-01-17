"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly does AuditAlly reflect new regulations?",
    answer:
      "We monitor sources continuously and summarize updates within hours, then roll changes into your workspace on the next sync.",
  },
  {
    question: "Which compliance frameworks do you cover?",
    answer:
      "Plans include popular frameworks like SOC 2, ISO 27001, HIPAA, and PCI DSS, with add-on coverage for region-specific standards.",
  },
  {
    question: "What does the audit trail include?",
    answer:
      "Every policy update, approval, and evidence upload is time-stamped so auditors can review a clear chain of custody.",
  },
  {
    question: "Can we customize policies and templates?",
    answer:
      "Yes. You can edit templates, assign owners, and publish custom policies that stay linked to the right controls.",
  },
  {
    question: "What onboarding and support should we expect?",
    answer:
      "You receive guided onboarding, training sessions, and in-product chat support, with priority response on higher tiers.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[900px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Answers to common compliance questions.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Learn how AuditAlly keeps your audits prepared and your team aligned.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-base font-semibold text-[var(--primary)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-[var(--accent)] transition",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "overflow-hidden text-sm text-slate-600 transition-all",
                    isOpen ? "mt-3 max-h-40" : "max-h-0",
                  )}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
