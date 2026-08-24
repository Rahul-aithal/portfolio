export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Build order, shown as the big watermark digit — NOT the display order below. */
  num: string;
  name: string;
  /** Shows the "latest" badge. Only set this on one project at a time. */
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
    num: "04",
    name: "EventMCP",
    featured: true,
    story:
      "Built during exam season, which is probably the worst time to build a scheduler — and also exactly why I did. It's a <strong>Google Calendar MCP server written in Go</strong>: add, list, delete events straight from any MCP-compatible client. OAuth2 auth, refresh token persistence, typed tool definitions. No vibe coding — I actually read the MCP Go SDK. Released three versions already.",
    tags: ["Go", "MCP", "Google Calendar API", "OAuth2", "stdio transport"],
    links: [
      { label: "code ↗", href: "https://github.com/Rahul-aithal/EventMCP" },
    ],
  },
  {
    num: "01",
    name: "InkWell",
    story:
      "Wanted to understand how real-time systems work, so I built a blogging platform around it. <strong>RabbitMQ for async notifications</strong>, Cloudinary for media, JWT auth — the kind of project where you keep pulling one thread and end up building a lot more than you planned.",
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
      "My first real Go project. Wraps FFmpeg to pull frames out of video files from the command line. Simple enough to finish, complex enough to teach me something. Now adding <strong>goroutines</strong> for batch processing — really just an excuse to learn Go's concurrency model properly.",
    tags: ["Go", "FFmpeg", "goroutines"],
    links: [
      { label: "code ↗", href: "https://github.com/Rahul-aithal/ThumbPicker" },
    ],
  },
];
