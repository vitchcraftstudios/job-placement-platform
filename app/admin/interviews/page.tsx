import AdminShell from "@/app/components/admin/admin-shell";
import { interviews } from "../cms-data";

export default function AdminInterviewsPage() {
  return (
    <AdminShell title="Interviews" subtitle="Plan interview timelines and panel coordination.">
      <div className="space-y-3">
        {interviews.map((interview) => (
          <article key={interview.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold">{interview.candidate}</h3>
                <p className="text-sm text-slate-600">
                  {interview.role} | {interview.company}
                </p>
              </div>
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold">
                {interview.status}
              </span>
            </div>
            <p className="mt-2 text-sm">{interview.time}</p>
            <p className="text-xs text-slate-500">Panel: {interview.panel}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
