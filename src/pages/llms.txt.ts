import type { APIRoute } from 'astro';
import { agentSections } from '../data/agentBrief';
import { profile, skillGroups } from '../data/profile';
import {
  agentMarkdownUrl,
  llmsFullTxtUrl,
  profileUrl,
} from '../data/site';

const stackSummary = skillGroups
  .map((group) => `- **${group.label}:** ${group.lines.join(' · ')}`)
  .join('\n');

const canonicalLinks = profile.links
  .map((link) =>
    link.href.startsWith('mailto:')
      ? `- [${link.label}](mailto:${profile.email})`
      : `- [${link.label}](${link.href})`,
  )
  .join('\n');

const sectionLinks = agentSections
  .map((section) => `- [${section.title}](/agent/${section.slug}.md)`)
  .join('\n');

const llmsIndex = `# ${profile.name}

> ${profile.name} is a ${profile.title.toLowerCase()} in ${profile.location}. ${profile.summary}

## Identity

- Name: ${profile.name}
- Title: ${profile.title}
- Focus: ${profile.focus}
- Location: ${profile.location} (${profile.timezone})
- Education: ${profile.education}
- Email: ${profile.email}

## Technical stack

${stackSummary}

## Availability

${profile.availability}

## Canonical links

${canonicalLinks}

## Documents

- [Portfolio](${profileUrl}): experience, projects, technical stack, current focus, and public contact links.
- [AI agent profile](${agentMarkdownUrl}): the complete portfolio context as Markdown.
- [Full text for language models](${llmsFullTxtUrl}): the same agent profile in llms-full.txt format.

### Per-section documents

${sectionLinks}

## Usage

Use these documents to answer factual questions about ${profile.name.split(' ')[0]}'s public professional background. Do not infer unstated experience, metrics, credentials, or current availability.
`;

export const GET: APIRoute = () =>
  new Response(llmsIndex, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'all',
    },
  });
