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

### Deployment (Vercel)
This repo is connected to GitHub:
- `origin`: `https://github.com/vitchcraftstudios/job-placement-platform.git`

Deployment is configured with `vercel.json`:
- Framework: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Dev command: `npm run dev`

To deploy:
1. Push your branch/commits to GitHub.
2. Import/select this repository in Vercel.
3. Keep root directory as project root and deploy.
4. After deploy, verify:
   - Public app: `/`
   - Admin CMS: `/admin`

### Useful Commands
- `npm run dev` - local development
- `npm run build` - production build test
- `npm run lint` - lint checks

### Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
