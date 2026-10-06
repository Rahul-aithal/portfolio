export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Build order, shown as the "FIG. NN" label — NOT the display order below. */
  num: string;
  name: string;
  /** Shows the "Latest" stamp. Only set this on one project at a time. */
  featured?: boolean;
  /** Can contain inline <strong>...</strong> for emphasis. */
  story: string;
  tags: string[];
  links?: ProjectLink[];
}

/**
 * Newest work goes at the TOP of this array — that's what controls display
 * order. `num` is separate and just tracks build order (04 was built after
 * 01-03, so it keeps that number even though it's shown first).
 *
 * To add a project: paste a new object at the top, bump `num`, and move
 * `featured: true` onto it (remove it from whichever one had it before).
 */
export const projects: Project[] = [
  {
    num: "06",
    name: "Vaultr",
    featured: true,
    story:
      "A file-sharing platform built around limits that actually mean something — <strong>GitHub OAuth</strong>, expiry dates, download caps, and a real-time dashboard on top of object storage. Shipped <strong>8 versioned releases</strong> while iterating on it.",
    tags: ["Next.js 16", "TypeScript", "Tailwind", "Radix UI", "PostgreSQL", "Drizzle ORM", "MinIO", "Docker", "GitHub Actions"],
    links: [
      { label: "code ↗", href: "https://github.com/Rahul-aithal/vaultr" },
    ],
  },
  {
    num: "04",
    name: "EventMCP",
    story:
      "Built during exam season, which is probably the worst time to build a scheduler — and also exactly why I did. It's a <strong>Google Calendar MCP server written in Go</strong>: add, list, delete events straight from any MCP-compatible client. OAuth2 auth, refresh token persistence, typed tool definitions. No vibe coding — I actually read the MCP Go SDK. Released three versions already.",
    tags: ["Go", "MCP", "Google Calendar API", "OAuth2", "stdio transport"],
    links: [
      { label: "code ↗", href: "https://github.com/Rahul-aithal/EventMCP" },
    ],
  },
  {
    num: "05",
    name: "WhatsApp Newsletter Bot",
    story:
      "A <strong>Node.js/TypeScript bot built on Baileys</strong> that sends structured newsletters to WhatsApp groups through a REST API — so updates go out cleanly without anyone hand-pasting walls of text.",
    tags: ["Node.js", "TypeScript", "Baileys", "REST API"],
    links: [
      {
        label: "code ↗",
        href: "https://github.com/Rahul-aithal/WA_Newslatter_Bot",
      },
    ],
  },
  {
    num: "01",
    name: "InkWell",
    story:
      "Wanted to understand how real-time systems work, so I built a storytelling platform around it. <strong>RabbitMQ for async notifications</strong>, Cloudinary for media, JWT auth — the kind of project where you keep pulling one thread and end up building a lot more than you planned.",
    tags: ["Node.js", "Express", "MongoDB", "RabbitMQ", "React", "Docker"],
    links: [
      { label: "open ↗", href: "https://ink-well-client.vercel.app/" },
      {
        label: "code ↗",
        href: "https://github.com/Rahul-aithal/Ink-well-client",
      },
    ],
  },
  {
    num: "02",
    name: "HashVault LMS",
    story:
      "Got curious about how video streaming actually works. Built an LMS from scratch — <strong>HLS adaptive streaming</strong>, Redis caching, proper auth. The interesting part was making it hold up under concurrent load without things quietly breaking.",
    tags: ["Node.js", "Redis", "HLS", "MongoDB", "Docker"],
  },
  {
    num: "03",
    name: "ThumbPicker",
    story:
      "My first real Go project. Started as a CLI that wraps FFmpeg to pull frames out of video files — simple enough to finish, complex enough to teach me something. Has since grown into a <strong>full web service</strong>: HTTP routing, PostgreSQL with <strong>sqlc</strong>, and server-rendered UI with <strong>templ</strong>.",
    tags: ["Go", "FFmpeg", "PostgreSQL", "sqlc", "templ", "HTTP"],
    links: [
      { label: "code ↗", href: "https://github.com/Rahul-aithal/ThumbPicker" },
    ],
  },
];
