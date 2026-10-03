# Rahul Aithal — Portfolio

A blueprint-style Astro site with production details, projects, skills, and public contact links.
Served from the site root (`/`), ready for a custom domain.

## Development

```sh
bun install
bun run astro dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

Use `bun run build` for a production build and `bun run preview` to inspect it.

## Custom domain

The site is served at `/` on `https://rahulaithal.site` (see `public/CNAME`).
DNS must point at GitHub Pages: `A` records `@` → `185.199.108.153`,
`185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and a `CNAME`
`www` → `rahulaithal.site` if you want www too). Then enable the custom
domain in repo Settings → Pages so GitHub provisions HTTPS.

## LLM-friendly outputs

The site exposes the same professional context in several machine-friendly forms.
All links are root-relative so the site works unchanged on any domain:

- `/` — semantic HTML with Schema.org `ProfilePage` metadata
- `/agent.md` — complete Markdown profile
- `/llms.txt` — concise LLM index
- `/llms-full.txt` — full-text LLM profile

The page also includes a **Copy for AI agent** button that copies the Markdown context to the clipboard.

Content shown on the page and used by the AI brief is centralized in:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/site.ts`

Astro documentation: <https://docs.astro.build>
