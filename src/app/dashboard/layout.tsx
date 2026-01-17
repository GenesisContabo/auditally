import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <div className="hidden w-72 flex-shrink-0 lg:block">
          <Sidebar />
        </div>
        <main className="flex-1 px-6 py-10 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
