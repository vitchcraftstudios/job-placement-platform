import AdminShell from "@/app/components/admin/admin-shell";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings" subtitle="Configure platform-wide admin behavior and permissions.">
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold">General</h3>
          <div className="mt-3 space-y-3">
            <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Platform name" defaultValue="JobPlace" />
            <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Support email" defaultValue="ops@jobplace.com" />
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold">Security</h3>
          <div className="mt-3 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Enforce 2FA for admins
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Audit logs for content changes
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Require approval for role publishing
            </label>
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
