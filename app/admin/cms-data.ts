export type AdminNavItem = {
  label: string;
  href: string;
  description: string;
};

export type Company = {
  id: string;
  name: string;
  industry: string;
  size: string;
  openRoles: number;
  status: "Active" | "Prospect" | "Paused";
};

export type Application = {
  id: string;
  candidate: string;
  role: string;
  company: string;
  stage: "Applied" | "Screening" | "Interview" | "Offer" | "Rejected";
  owner: string;
};

export type Interview = {
  id: string;
  candidate: string;
  role: string;
  company: string;
  time: string;
  panel: string;
  status: "Scheduled" | "Completed" | "Rescheduled";
};

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  status: "Published" | "Draft";
  updatedAt: string;
};

export const adminNav: AdminNavItem[] = [
  { label: "Overview", href: "/admin", description: "KPIs and activity feed" },
  { label: "Jobs", href: "/admin/jobs", description: "Role management" },
  { label: "Candidates", href: "/admin/candidates", description: "Talent database" },
  { label: "Companies", href: "/admin/companies", description: "Partner accounts" },
  { label: "Applications", href: "/admin/applications", description: "Pipeline tracking" },
  { label: "Interviews", href: "/admin/interviews", description: "Schedule and outcomes" },
  { label: "Content", href: "/admin/content", description: "CMS pages and banners" },
  { label: "Settings", href: "/admin/settings", description: "Admin config" },
];

export const adminKpis = [
  { label: "Active jobs", value: "42", delta: "+6 this week" },
  { label: "Candidates in pool", value: "1,284", delta: "+58 this week" },
  { label: "Applications in motion", value: "316", delta: "+12 today" },
  { label: "Offer acceptance", value: "74%", delta: "+3% MoM" },
];

export const companies: Company[] = [
  { id: "CMP-01", name: "Northstar Labs", industry: "SaaS", size: "200-500", openRoles: 8, status: "Active" },
  { id: "CMP-02", name: "Blueorbit Logistics", industry: "Logistics", size: "500-1,000", openRoles: 6, status: "Active" },
  { id: "CMP-03", name: "Mercury Fintech", industry: "Fintech", size: "100-200", openRoles: 4, status: "Prospect" },
];

export const applications: Application[] = [
  { id: "APP-701", candidate: "Ava Martin", role: "Frontend Engineer", company: "Northstar Labs", stage: "Interview", owner: "Riya Patel" },
  { id: "APP-702", candidate: "Noah Reed", role: "Data Analyst", company: "Blueorbit Logistics", stage: "Screening", owner: "Harsh V" },
  { id: "APP-703", candidate: "Sophia Chen", role: "Backend Engineer", company: "Mercury Fintech", stage: "Offer", owner: "Ishita Roy" },
];

export const interviews: Interview[] = [
  { id: "INT-991", candidate: "Ava Martin", role: "Frontend Engineer", company: "Northstar Labs", time: "Mar 03, 2026 11:00 AM", panel: "Hiring Manager + FE Lead", status: "Scheduled" },
  { id: "INT-992", candidate: "Noah Reed", role: "Data Analyst", company: "Blueorbit Logistics", time: "Mar 03, 2026 02:30 PM", panel: "Data Lead", status: "Scheduled" },
  { id: "INT-993", candidate: "Sophia Chen", role: "Backend Engineer", company: "Mercury Fintech", time: "Mar 01, 2026 04:00 PM", panel: "CTO + Senior Engineer", status: "Completed" },
];

export const cmsPages: CmsPage[] = [
  { id: "PG-12", title: "Home Hero Banner", slug: "/#hero", status: "Published", updatedAt: "Mar 02, 2026" },
  { id: "PG-13", title: "Company Onboarding Guide", slug: "/resources/onboarding", status: "Published", updatedAt: "Feb 26, 2026" },
  { id: "PG-14", title: "Candidate FAQ", slug: "/resources/faq", status: "Draft", updatedAt: "Feb 24, 2026" },
];

export const recentActivity = [
  "New company lead added: Kitewave Health",
  "Application APP-703 moved to Offer stage",
  "Interview INT-993 marked as completed",
  "CMS page 'Candidate FAQ' moved to draft",
];
