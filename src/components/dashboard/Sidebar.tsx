import Link from "next/link";
import {
  FileText,
  LayoutDashboard,
  Scale,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Regulations", href: "/dashboard/regulations", icon: Scale },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-200 bg-white px-6 py-8">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight text-[#1e3a5f]"
      >
        AuditAlly
      </Link>
      <nav aria-label="Main navigation" className="mt-10 flex flex-col gap-2 text-sm font-medium text-slate-600">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[#1e3a5f] transition hover:bg-slate-100 hover:text-[#0f2a46]"
            >
              <Icon className="h-5 w-5 text-[#00b894] transition group-hover:text-[#00997b]" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-semibold text-white">
            AA
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1e3a5f]">Alex Morgan</p>
            <p className="text-xs text-slate-500">Compliance Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
