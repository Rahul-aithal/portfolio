export interface ProfileLink {
  label: string;
  href: string;
}

export const profile = {
  name: 'Rahul Aithal',
  handle: 'Rahul-aithal',
  title: 'Full-Stack Developer',
  focus: 'Backend systems, full-stack products, developer tooling, and AI tooling',
  location: 'Bengaluru, India',
  timezone: 'Asia/Kolkata',
  availability:
    'Available for full-time roles and internships in backend, full-stack, or developer tooling.',
  email: 'aithalrahul34@gmail.com',
  education: 'BNMIT CSE · 8.9 CGPA',
  summary:
    'Final-year CS student who builds things to understand how they work. Backend systems, full-stack products, the occasional low-level rabbit hole. Currently a Frontend Developer intern at XParth Technologies, learning Go properly, and building with MCP and LLM tooling.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Rahul-aithal' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-aithal',
    },
    { label: 'Medium', href: 'https://medium.com/@aithalrahul34' },
    { label: 'Email', href: 'mailto:aithalrahul34@gmail.com' },
  ] satisfies ProfileLink[],
};

// Add or remove lines here without changing the rendered page or agent brief.
export const currently: string[] = [
  'Currently interning as <strong>Frontend Developer at XParth Technologies</strong> — building a Next.js/TypeScript admin platform.',
  'Wrapped up a 15-month internship at a cybersecurity firm — shipped a <strong>B2B SaaS platform</strong> across the full stack. Real production, real users, real deadlines.',
  '<strong>Actively looking</strong> for full-time or internship roles in backend, full-stack, or developer tooling.',
  'Going deeper into <strong>Go</strong> — concurrency, the runtime, why it makes systems people so happy.',
  'Building with <strong>MCP and LLM tooling</strong> — wiring AI into real products without things falling apart.',
  'Writing on <strong>Medium</strong> when I have something worth saying.',
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

// Newest role first.
export const experiences: Experience[] = [
  {
    role: 'Frontend Developer Intern',
    company: 'XParth Technologies',
    location: 'Remote',
    period: 'Jul 2026 – Present',
    bullets: [
      'Building a <strong>Next.js/TypeScript admin platform</strong> — shipped <strong>10+ pages</strong> across routing, layouts, and complex UI states.',
      'Built <strong>reusable components</strong> and <strong>file import workflows</strong> that other screens compose instead of re-implementing.',
      'Server state managed with <strong>TanStack Query</strong>; UI composed from <strong>shadcn/ui</strong> components.',
      'Integrated <strong>PostHog analytics</strong> to measure feature usage and adoption.',
    ],
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'shadcn/ui', 'PostHog'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Pragya Cyber Ltd.',
    location: 'Remote',
    period: 'Feb 2025 – Apr 2026',
    bullets: [
      'Built and maintained core modules of a <strong>cybersecurity-focused B2B SaaS platform</strong>, contributing across frontend, backend, and automation layers.',
      'Developed frontend and backend features — <strong>REST APIs</strong>, <strong>database integrations</strong>, and <strong>automation workflows</strong> — using React, TypeScript, NestJS, Express.js, MongoDB, and n8n.',
      'Automated repetitive workflows and improved <strong>development and operational efficiency</strong> across the team.',
    ],
    tags: ['React', 'TypeScript', 'NestJS', 'Express.js', 'MongoDB', 'n8n'],
  },
];

export interface SkillGroup {
  label: string;
  lines: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', lines: ['JavaScript · TypeScript', 'Go · C++ · Python · SQL'] },
  { label: 'Frontend', lines: ['React.js · Next.js', 'TanStack Query · TanStack Table', 'Tailwind CSS · shadcn/ui · Radix UI · Chakra UI'] },
  { label: 'Backend', lines: ['Node.js · Express', 'NestJS · FastAPI'] },
  { label: 'Databases', lines: ['MongoDB · Redis', 'PostgreSQL'] },
  { label: 'DevOps / Cloud', lines: ['Docker · AWS EC2', 'Vercel · GitHub Actions'] },
  { label: 'Tools', lines: ['n8n · RabbitMQ · FFmpeg', 'sqlc · Drizzle ORM · Baileys', 'Prometheus · Grafana · MCP SDK'] },
];
