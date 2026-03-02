import { candidates } from "@/app/data";
import AdminShell from "@/app/components/admin/admin-shell";

export default function AdminCandidatesPage() {
  return (
    <AdminShell title="Candidates" subtitle="Manage profiles, readiness, and shortlist quality.">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {candidates.map((candidate) => (
          <article key={candidate.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">{candidate.name}</h3>
            <p className="text-sm text-slate-600">{candidate.role}</p>
            <p className="mt-2 text-xs text-slate-500">{candidate.location}</p>
            <p className="mt-1 text-xs text-slate-500">{candidate.experience}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-300 bg-white px-2 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 p-4">
        <h3 className="text-lg font-semibold">Add Candidate</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Full name" />
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Role" />
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Location" />
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Experience (years)" />
        </div>
        <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Save Candidate
        </button>
      </section>
    </AdminShell>
  );
}
