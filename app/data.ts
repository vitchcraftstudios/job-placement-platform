export type Candidate = {
  id: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  experience: string;
  availability: "Immediate" | "2 Weeks" | "30 Days";
  score: number;
};

export type JobOpening = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  mode: "Remote" | "Hybrid" | "Onsite";
  applicants: number;
  status: "Open" | "Interviewing" | "Offer Released";
};

export const candidates: Candidate[] = [
  {
    id: "C-101",
    name: "Ava Martin",
    role: "Frontend Engineer",
    location: "Austin, TX",
    skills: ["React", "TypeScript", "Next.js"],
    experience: "4 years",
    availability: "2 Weeks",
    score: 91,
  },
  {
    id: "C-102",
    name: "Noah Reed",
    role: "Data Analyst",
    location: "Chicago, IL",
    skills: ["SQL", "Python", "Power BI"],
    experience: "3 years",
    availability: "Immediate",
    score: 87,
  },
  {
    id: "C-103",
    name: "Sophia Chen",
    role: "Backend Engineer",
    location: "Seattle, WA",
    skills: ["Node.js", "PostgreSQL", "AWS"],
    experience: "5 years",
    availability: "30 Days",
    score: 94,
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: "J-2201",
    title: "Software Engineer II",
    company: "Northstar Labs",
    location: "San Francisco, CA",
    salary: "$125k - $145k",
    mode: "Hybrid",
    applicants: 38,
    status: "Interviewing",
  },
  {
    id: "J-2202",
    title: "Operations Analyst",
    company: "Blueorbit Logistics",
    location: "Remote (US)",
    salary: "$80k - $95k",
    mode: "Remote",
    applicants: 54,
    status: "Open",
  },
  {
    id: "J-2203",
    title: "Full Stack Developer",
    company: "Mercury Fintech",
    location: "New York, NY",
    salary: "$135k - $160k",
    mode: "Onsite",
    applicants: 29,
    status: "Offer Released",
  },
];

export const pipeline = {
  totalCandidates: 124,
  activePartners: 18,
  interviewsThisWeek: 36,
  offersThisMonth: 14,
  placementRate: "72%",
  avgTimeToHire: "21 days",
};
