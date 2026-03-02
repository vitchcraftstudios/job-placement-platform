import { adminKpis, recentActivity } from "./cms-data";
import AdminShell from "../components/admin/admin-shell";

export default function AdminOverviewPage() {
  return (
    <AdminShell title="Overview" subtitle="Operational snapshot across hiring and content.">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminKpis.map((kpi) => (
          <article key={kpi.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{kpi.label}</p>
            <p className="mt-2 text-3xl font-bold">{kpi.value}</p>
            <p className="mt-1 text-xs font-medium text-emerald-700">{kpi.delta}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
        <article className="rounded-2xl border border-slate-200 p-4">
          <h3 className="text-lg font-semibold">Operations board</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Pending approvals</p>
              <p className="mt-2 text-2xl font-bold">17</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Interviews today</p>
              <p className="mt-2 text-2xl font-bold">9</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Pages to review</p>
              <p className="mt-2 text-2xl font-bold">3</p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 p-4">
          <h3 className="text-lg font-semibold">Recent activity</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {recentActivity.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </AdminShell>
  );
}
