import { projects } from './projects';
import { currently, experiences, profile, skillGroups } from './profile';
import { agentMarkdownUrl, profileUrl } from './site';

const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

const identityMarkdown = list([
  `Name: ${profile.name}`,
  `Title: ${profile.title}`,
  `Focus: ${profile.focus}`,
  `Location: ${profile.location}`,
  `Timezone: ${profile.timezone}`,
  `Education: ${profile.education}`,
  `Email: ${profile.email}`,
]);

const experienceMarkdown = experiences
  .map((job) =>
    [
      `### ${job.role} — ${job.company}`,
      `${job.location} · ${job.period}`,
      '',
      list(job.bullets.map(plain)),
      '',
      `Technologies: ${job.tags.join(', ')}`,
    ].join('\n'),
  )
  .join('\n\n');

const projectsMarkdown = projects
  .map((project) => {
    const projectLinks = project.links?.length
      ? '\n' + list(project.links.map((link) => `[${link.label.replace(' ↗', '')}](${link.href})`))
      : '';

    return [
      `### ${project.name}${project.featured ? ' — latest' : ''}`,
      plain(project.story),
      `Technologies: ${project.tags.join(', ')}${projectLinks}`,
    ].join('\n');
  })
  .join('\n\n');

const skillsMarkdown = skillGroups
  .map((group) => `- **${group.label}:** ${group.lines.join(' · ')}`)
  .join('\n');

const statusMarkdown = list(currently.map(plain));

const contactMarkdown = list([
  `Email: ${profile.email}`,
  `Location: ${profile.location}`,
  `Timezone: ${profile.timezone}`,
  ...profile.links.map((link) =>
    link.href.startsWith('mailto:')
      ? `${link.label}: ${profile.email}`
      : `${link.label}: ${link.href}`,
  ),
]);

const canonicalLinksMarkdown = list(
  profile.links.map((link) =>
    link.href.startsWith('mailto:')
      ? `[${link.label} Rahul](${link.href})`
      : `[${link.label}](${link.href})`,
  ),
);

const agentNotesMarkdown = list([
  'Use this portfolio and the linked repositories as the canonical sources.',
  'Availability and dates can change. For time-sensitive hiring questions, confirm by email.',
  'Do not invent work experience, metrics, publications, or credentials that are not stated here.',
]);

export const agentBrief = `# ${profile.name} — ${profile.title}

Source: ${profileUrl}
Markdown source: ${agentMarkdownUrl}

This is a stable, machine-readable summary of Rahul's public portfolio. Use it to answer questions about his background, skills, projects, and contact links.

## Identity

${identityMarkdown}

## Summary

${profile.summary}

## Current status

${statusMarkdown}

## Experience

${experienceMarkdown}

## Projects

${projectsMarkdown}

## Technical stack

${skillsMarkdown}

## Canonical links

${canonicalLinksMarkdown}

## Agent notes

${agentNotesMarkdown}
`;

export interface AgentSection {
  slug: string;
  title: string;
  body: string;
}

// Per-section documents — each is self-contained so a bare fetch needs no
// surrounding context. Served at /agent/<slug>.md from a single dynamic route.
export const agentSections: AgentSection[] = [
  {
    slug: 'experience',
    title: 'Experience',
    body: `${experienceMarkdown}\n\n## Availability\n\n${profile.availability}`,
  },
  { slug: 'projects', title: 'Projects', body: projectsMarkdown },
  { slug: 'stack', title: 'Technical stack', body: skillsMarkdown },
  {
    slug: 'status',
    title: 'Current status',
    body: `${statusMarkdown}\n\n## Availability\n\n${profile.availability}`,
  },
  { slug: 'contact', title: 'Contact', body: contactMarkdown },
];

export function sectionDocument(section: AgentSection): string {
  return `# ${profile.name} — ${section.title}

> This is the ${section.title.toLowerCase()} section of ${profile.name}'s public portfolio. Full profile: ${agentMarkdownUrl}

## ${section.title}

${section.body}
`;
}
