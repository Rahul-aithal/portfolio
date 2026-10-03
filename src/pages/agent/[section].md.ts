import type { APIRoute, GetStaticPaths } from 'astro';
import { agentSections, sectionDocument } from '../../data/agentBrief';

export const getStaticPaths: GetStaticPaths = () =>
  agentSections.map((section) => ({ params: { section: section.slug } }));

const headers = {
  'Content-Type': 'text/markdown; charset=utf-8',
  'Cache-Control': 'public, max-age=3600',
  'X-Robots-Tag': 'all',
};

export const GET: APIRoute = ({ params }) => {
  const section = agentSections.find((s) => s.slug === params.section);
  if (!section) return new Response('Not found', { status: 404, headers });

  return new Response(sectionDocument(section), { headers });
};
