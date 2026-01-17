import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold text-[#1e3a5f]">
            AuditAlly
          </span>
          <span className="text-sm text-[#64748b]">
            AI-Powered Compliance. Zero Surprises.
          </span>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm font-medium text-[#1a1a2e]">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn("transition-colors hover:text-[#2d4a6f]")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-sm text-[#64748b]">
          © 2026 AuditAlly. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
