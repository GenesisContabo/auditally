"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={cn(
            "text-xl font-semibold tracking-tight text-[#1e3a5f]",
          )}
        >
          AuditAlly
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-[#1a1a2e] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#2d4a6f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/sign-up"
            className={cn(
              "rounded-md bg-[#00b894] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00d9a5]",
            )}
          >
            Get Started
          </Link>
        </div>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-[#1e3a5f] transition hover:bg-slate-100 md:hidden",
          )}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "border-t border-slate-200/70 bg-white px-6 py-4 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-4 text-sm font-medium text-[#1a1a2e]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#2d4a6f]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-up"
            className={cn(
              "mt-2 inline-flex w-full items-center justify-center rounded-md bg-[#00b894] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00d9a5]",
            )}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
