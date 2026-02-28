import { candidates, jobOpenings, pipeline } from "./data";

export default function Home() {
  const kpis = [
    { label: "Candidates", value: pipeline.totalCandidates.toString() },
    { label: "Hiring Partners", value: pipeline.activePartners.toString() },
    { label: "Interviews This Week", value: pipeline.interviewsThisWeek.toString() },
    { label: "Offers This Month", value: pipeline.offersThisMonth.toString() },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <section className="rounded-2xl border border-slate-300 bg-gradient-to-br from-white to-slate-100 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Job Placement Platform
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Demo built for production evolution
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-700 sm:text-base">
            This demo provides candidate pipeline visibility, job opening tracking,
            and recruiter operations metrics. Next steps can add auth, database,
            and API-driven workflows without replacing the UI skeleton.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-slate-300 bg-white/70 p-4"
              >
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-300 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Top Candidates</h2>
              <span className="text-xs text-slate-500">Ranked by fit score</span>
            </div>

            <div className="mt-5 space-y-4">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{candidate.name}</p>
                      <p className="text-sm text-slate-600">
                        {candidate.role} | {candidate.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-teal-900/60 px-2 py-1 text-xs font-medium text-teal-200">
                      {candidate.score}%
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">
                    {candidate.experience} experience | Available in {candidate.availability}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-300 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active Openings</h2>
              <span className="text-xs text-slate-500">Partner companies</span>
            </div>

            <div className="mt-5 space-y-4">
              {jobOpenings.map((job) => (
                <div key={job.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{job.title}</p>
                  <p className="text-sm text-slate-600">
                    {job.company} | {job.location}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-md border border-slate-300 px-2 py-1 text-slate-700">
                      {job.mode}
                    </span>
                    <span className="rounded-md border border-slate-300 px-2 py-1 text-slate-700">
                      {job.salary}
                    </span>
                    <span className="rounded-md border border-slate-300 px-2 py-1 text-slate-700">
                      {job.applicants} applicants
                    </span>
                    <span className="rounded-md bg-amber-900/60 px-2 py-1 text-amber-200">
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-300 bg-white p-6">
          <h2 className="text-xl font-semibold">Operations Snapshot</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Placement Rate</p>
              <p className="mt-2 text-3xl font-bold text-emerald-300">{pipeline.placementRate}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Average Time to Hire</p>
              <p className="mt-2 text-3xl font-bold text-blue-300">{pipeline.avgTimeToHire}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Production roadmap: secure auth, role-based access, PostgreSQL,
            server actions/API routes, and interview scheduling integrations.
          </p>
        </section>
      </main>
    </div>
  );
}
