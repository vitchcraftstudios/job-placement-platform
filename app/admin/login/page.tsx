import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

async function loginAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const sessionToken = process.env.ADMIN_SESSION_TOKEN;

  if (!expectedEmail || !expectedPassword || !sessionToken) {
    redirect("/admin/login?error=config");
  }

  if (email !== expectedEmail || password !== expectedPassword) {
    redirect("/admin/login?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect("/admin");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Admin CMS</p>
        <h1 className="mt-2 text-2xl font-bold">Admin Login</h1>
        <p className="mt-1 text-sm text-slate-600">Sign in to manage website content and operations.</p>

        {error ? (
          <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {error === "config"
              ? "Admin credentials are not configured in environment variables."
              : "Invalid email or password."}
          </p>
        ) : null}

        <form action={loginAction} className="mt-5 space-y-3">
          <input
            name="email"
            type="email"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="admin@company.com"
            required
          />
          <input
            name="password"
            type="password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Password"
            required
          />
          <button className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
