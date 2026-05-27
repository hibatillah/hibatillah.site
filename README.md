## Portfolio

A modern, responsive portfolio website showcasing work, education, and projects. Single-page overview with MDX-powered detail pages, stacked polaroid-style thumbnails, anchor-linked headings, and dark mode.

### Stack

- Next.js 16 (App Router, React Compiler, Turbopack)
- React 19
- Tailwind CSS v4
- Motion (motion/react)
- shadcn/ui on Base UI (`@base-ui/react`)
- MDX with `remark-gfm` and `remark-mdx-frontmatter`
- `thumbhash` + `sharp` for remote image blur placeholders
- TanStack Query for client-side image fetching
- Bun, oxlint, oxfmt

### Routes

- `/` — Overview (brief, work, education, projects)
- `/work/[slug]`, `/edu/[slug]`, `/project/[slug]` — MDX detail pages

### Develop

```bash
bun install
bun dev
```

Requires Bun ≥1.3.5 and Node ≥24.12.
