## Job Placement Platform Demo

This is a Next.js demo of a job placement platform designed to be upgraded into a production system.

### Current Demo Scope
- Candidate pipeline snapshot
- Active job opening management view
- Placement operations KPI overview
- Clean TypeScript data models in `app/data.ts`

### Production Evolution Plan
- Add authentication and role-based access (candidate/recruiter/admin)
- Replace mock data with PostgreSQL + Prisma
- Add API routes/server actions for applications, interviews, offers
- Integrate email/calendar notifications
- Add observability, audit logs, and CI checks

### Run Locally
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` to view the app.

### GitHub + Vercel
This repo is connected to GitHub:
- `origin`: `https://github.com/vitchcraftstudios/job-placement-platform.git`

To deploy on Vercel later:
1. Push your commits to `main`.
2. Import this GitHub repository in Vercel.
3. Keep framework preset as Next.js and deploy.

### Useful Commands
- `npm run dev` - local development
- `npm run build` - production build test
- `npm run lint` - lint checks

### Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
