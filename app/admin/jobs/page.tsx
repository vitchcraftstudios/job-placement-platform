import { jobOpenings } from "@/app/data";
import AdminShell from "@/app/components/admin/admin-shell";

export default function AdminJobsPage() {
  return (
    <AdminShell title="Jobs" subtitle="Create and manage openings, status, and hiring assignments.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Applicants</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobOpenings.map((job) => (
              <tr key={job.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{job.title}</td>
                <td className="px-4 py-3">{job.company}</td>
                <td className="px-4 py-3">{job.location}</td>
                <td className="px-4 py-3">{job.applicants}</td>
                <td className="px-4 py-3">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-lg font-semibold">Create Job</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Job title" />
          <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Company name" />
          <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Location" />
          <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Salary range" />
        </div>
        <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Save Job
        </button>
      </section>
    </AdminShell>
  );
}
