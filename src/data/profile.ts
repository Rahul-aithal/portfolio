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
    'Third-year CS student who builds things to understand how they work. Backend systems, full-stack products, the occasional low-level rabbit hole. Just wrapped a production internship, is learning Go properly, and is building with MCP and LLM tooling.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Rahul-aithal' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-aithal-b67b5b253/',
    },
    { label: 'Medium', href: 'https://medium.com/@aithalrahul34' },
    { label: 'Email', href: 'mailto:aithalrahul34@gmail.com' },
  ] satisfies ProfileLink[],
};

// Add or remove lines here without changing the rendered page or agent brief.
export const currently: string[] = [
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
    role: 'Full-Stack Developer Intern',
    company: 'Pragya Cyber Ltd.',
    location: 'Bengaluru',
    period: 'Jan 2025 – Apr 2026',
    bullets: [
      'Built and maintained core modules of a <strong>B2B SaaS platform</strong>, contributing across frontend, backend, and automation layers.',
      'Designed a structured data management system with <strong>dynamic, customisable templates</strong> to streamline internal team workflows.',
      'Developed a stakeholder-facing portal with <strong>real-time progress tracking</strong> and versioned result views.',
      'Implemented an end-to-end <strong>automated document export pipeline</strong> using Docxtemplater for consistent client deliverables.',
      'Contributed to early planning and exploration of <strong>LLM-based automation workflows</strong>.',
    ],
    tags: ['Node.js', 'NestJS', 'React', 'MongoDB', 'Docxtemplater', 'n8n', 'AWS'],
  },
];

export interface SkillGroup {
  label: string;
  lines: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', lines: ['JavaScript · TypeScript', 'Go · C++ · Python · SQL'] },
  { label: 'Frontend', lines: ['React.js', 'Tailwind CSS · Chakra UI'] },
  { label: 'Backend', lines: ['Node.js · Express', 'NestJS · FastAPI'] },
  { label: 'Databases', lines: ['MongoDB · Redis', 'PostgreSQL'] },
  { label: 'DevOps / Cloud', lines: ['Docker · AWS EC2', 'Vercel · GitHub Actions'] },
  { label: 'Tools', lines: ['n8n · RabbitMQ', 'FFmpeg · MCP SDK'] },
];
