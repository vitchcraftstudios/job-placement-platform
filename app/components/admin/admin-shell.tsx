"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { adminNav } from "@/app/admin/cms-data";

type AdminShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AdminShell({ title, subtitle, children }: AdminShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-5 lg:grid-cols-[260px,1fr] lg:px-8">
        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="mb-5 border-b border-slate-100 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Admin CMS</p>
            <h1 className="mt-1 text-lg font-bold">JobPlace Control Center</h1>
          </div>
          <nav className="space-y-1">
            {adminNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl border px-3 py-2 text-sm transition ${
                    isActive
                      ? "border-cyan-200 bg-cyan-50 text-cyan-800"
                      : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-slate-600">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Export
              </button>
              <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                Create New
              </button>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
