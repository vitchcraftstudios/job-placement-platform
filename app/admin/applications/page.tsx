import AdminShell from "@/app/components/admin/admin-shell";
import { applications } from "../cms-data";

export default function AdminApplicationsPage() {
  return (
    <AdminShell title="Applications" subtitle="Control pipeline stage transitions and ownership.">
      <div className="space-y-3">
        {applications.map((application) => (
          <article key={application.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold">{application.candidate}</h3>
                <p className="text-sm text-slate-600">
                  {application.role} | {application.company}
                </p>
              </div>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                {application.stage}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">Owner: {application.owner}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
