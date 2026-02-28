import { jobOpenings, pipeline } from "./data";

const processSteps = [
  {
    title: "Build your profile",
    detail: "Create a skills-first profile with portfolio links and role preferences.",
  },
  {
    title: "Get matched instantly",
    detail: "Our matching engine highlights roles aligned to your skills and goals.",
  },
  {
    title: "Interview confidently",
    detail: "Track status, prep notes, and interviews from one clean workflow.",
  },
];

const categories = ["Engineering", "Data", "Product", "Design", "Marketing", "Operations"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              JP
            </span>
            <div>
              <p className="text-sm font-bold tracking-wide">JobPlace</p>
              <p className="text-xs text-slate-500">Career platform</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#" className="transition hover:text-slate-900">
              Home
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Jobs
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Companies
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Resources
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Login
            </button>
            <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
              Get Started
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl" />

          <div className="relative">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Job Placement Platform
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Find your next role with a modern placement experience
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              A candidate-first platform to discover verified jobs, track applications,
              and move from profile to offer with transparent updates.
            </p>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 backdrop-blur sm:flex-row">
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400"
                placeholder="Search roles, companies, or skills"
                readOnly
              />
              <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explore Jobs
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Candidates onboarded</p>
            <p className="mt-2 text-3xl font-bold">{pipeline.totalCandidates}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Partner companies</p>
            <p className="mt-2 text-3xl font-bold">{pipeline.activePartners}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Interviews this week</p>
            <p className="mt-2 text-3xl font-bold">{pipeline.interviewsThisWeek}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Placement rate</p>
            <p className="mt-2 text-3xl font-bold text-emerald-600">{pipeline.placementRate}</p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Featured opportunities</h2>
              <a href="#" className="text-sm font-semibold text-cyan-700">
                View all
              </a>
            </div>
            <div className="mt-6 space-y-4">
              {jobOpenings.map((job) => (
                <div key={job.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-sm text-slate-600">
                        {job.company} | {job.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                      {job.mode}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-md border border-slate-300 bg-white px-2 py-1 text-slate-700">
                      {job.salary}
                    </span>
                    <span className="rounded-md border border-slate-300 bg-white px-2 py-1 text-slate-700">
                      {job.applicants} applicants
                    </span>
                    <span className="rounded-md bg-amber-100 px-2 py-1 font-medium text-amber-700">
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Success story</p>
            <h3 className="mt-3 text-2xl font-semibold">From application to offer in 17 days</h3>
            <p className="mt-4 text-sm text-slate-300">
              &quot;The platform made every stage clear. I knew which interviews were next,
              got timely updates, and accepted my offer without confusion.&quot;
            </p>
            <p className="mt-3 text-sm font-semibold">Ava Martin, Frontend Engineer</p>
            <div className="mt-7 rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              <p className="text-xs text-slate-300">Average time to hire</p>
              <p className="mt-2 text-3xl font-bold text-cyan-300">{pipeline.avgTimeToHire}</p>
            </div>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {idx + 1}
                </span>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-7 text-white shadow-sm sm:p-10">
          <h2 className="max-w-2xl text-3xl font-bold">Ready to launch your career move?</h2>
          <p className="mt-3 max-w-xl text-sm text-cyan-50">
            This demo is built to evolve into production with auth, database, role-based
            access, and workflows for applications, interviews, and offers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Create Candidate Profile
            </button>
            <button className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Hire With Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
