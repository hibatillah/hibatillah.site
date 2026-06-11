## Portfolio

A modern, responsive portfolio website showcasing work, education, and projects. Single-page overview with MDX-powered detail pages, stacked polaroid-style thumbnails, anchor-linked headings, and dark mode.

### Stack

- Next.js 16 (App Router, React Compiler, Turbopack)
- React 19
- Tailwind CSS v4
- Motion (motion/react)
- shadcn/ui on Base UI (`@base-ui/react`)
- MDX with `remark-gfm` and `remark-mdx-frontmatter`
- `next/og` Open Graph images, schema.org JSON-LD structured data
- Bun, oxlint, oxfmt

### Development

```bash
bun install
bun dev
```

Requires Bun ≥1.3.5 and Node ≥24.12.

### AI & agent relevancy

The site is built to be read by LLMs and autonomous agents, not just search crawlers:

- **`/llms.txt`** — a curated markdown map of the site ([llmstxt.org](https://llmstxt.org)), linking each page to its raw `.md` version.
- **Markdown endpoints** — append `.md` to any detail URL (`/project/<slug>.md`, `/work/<slug>.md`, `/edu/<slug>.md`) to get the raw MDX content instead of rendered HTML.
- **Structured data** — schema.org JSON-LD (`Person` + `WebSite` + `ProfilePage`) and `next/og` Open Graph images on every page.
- **AI-crawler friendly** — `robots.txt` explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others.

### Agent skills

Add Claude Code agent skills for working on this repo:

```bash
bunx skills experimental_install
```
