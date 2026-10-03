import type { APIRoute } from 'astro';
import { agentBrief } from '../data/agentBrief';

export const GET: APIRoute = () =>
  new Response(agentBrief, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'all',
    },
  });
