import type { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    // <main className="min-h-screen flex p-6 gap-4 bg-neutral-50">
    <div className="h-screen p-4  bg-neutral-100">
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
