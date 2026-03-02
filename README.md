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

### Configure Neon + Admin CMS
1. Ensure `.env.local` has:
   - `DATABASE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `ADMIN_SESSION_TOKEN`
2. Install dependencies:
   - `npm install`
3. Generate Prisma client:
   - `npm run db:generate`
4. Push schema to Neon:
   - `npm run db:push`
5. Start app:
   - `npm run dev`

Admin endpoints:
- Login: `/admin/login`
- CMS content editor: `/admin/content`

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
- `npm run db:generate` - generate Prisma client
- `npm run db:push` - sync Prisma schema to Neon
- `npm run db:studio` - open Prisma Studio

### Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
