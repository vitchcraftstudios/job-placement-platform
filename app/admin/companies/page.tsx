import AdminShell from "@/app/components/admin/admin-shell";
import { companies } from "../cms-data";

export default function AdminCompaniesPage() {
  return (
    <AdminShell title="Companies" subtitle="Track partner organizations and account health.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Industry</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Open roles</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{company.name}</td>
                <td className="px-4 py-3">{company.industry}</td>
                <td className="px-4 py-3">{company.size}</td>
                <td className="px-4 py-3">{company.openRoles}</td>
                <td className="px-4 py-3">{company.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
