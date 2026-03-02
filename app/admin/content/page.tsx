import AdminShell from "@/app/components/admin/admin-shell";
import { cmsPages } from "../cms-data";

export default function AdminContentPage() {
  return (
    <AdminShell title="Content CMS" subtitle="Edit pages, banners, and publishing status.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {cmsPages.map((page) => (
              <tr key={page.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{page.title}</td>
                <td className="px-4 py-3">{page.slug}</td>
                <td className="px-4 py-3">{page.status}</td>
                <td className="px-4 py-3">{page.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 p-4">
        <h3 className="text-lg font-semibold">Quick content editor</h3>
        <input className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Page title" />
        <textarea
          className="mt-3 h-32 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Page content..."
        />
        <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Save Draft
        </button>
      </section>
    </AdminShell>
  );
}
