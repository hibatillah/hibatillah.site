# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **Bun** as the package manager (required ≥1.3.5).

```bash
bun dev          # Start development server
bun build        # Production build
bun lint         # Run oxlint
bun lint:fix     # Auto-fix lint issues
bun format       # Format with oxfmt
bun format:check # Check formatting without writing
```

Pre-commit hooks (husky + lint-staged) automatically run `oxlint --fix` and `oxfmt` on staged `.js/.jsx/.ts/.tsx/.json` files.

## Architecture

**Next.js 16 App Router** portfolio site with MDX-based content management.

### Route structure

All user-facing pages live under `src/app/(app)/` with a shared layout (navigation + theme switcher):

- `/` — Overview (home): featured experience, education, and projects
- `/projects` — Project listing with filtering
- `/projects/[slug]` — Individual project detail page (MDX)
- `/experience/[slug]` — Experience detail (MDX)
- `/education/[slug]` — Education detail (MDX)
- `/explore` — Placeholder page (upcoming feature)

Each route group has a `_components/` subdirectory for route-specific components.

### Content system

All portfolio content lives in `src/contents/`:

- `profile.json` — Central config: name, description, CDN base URL (`asssets`), `twitterHandle` (e.g. `@handle`), featured slugs, and social links. Referenced throughout the app and in `next.config.ts` (for `/links/:label` redirects — `mailto:` entries are filtered out).
- `projects/`, `experiences/`, `educations/` — MDX files with YAML frontmatter matching types in `src/lib/types.ts`.

Content is loaded via two server functions in `src/lib/contents.ts`:
- `getContentByCategory<T>(category)` — Returns all frontmatter objects for a category
- `getContentData<T>(category, slug)` — Returns `{ Content, data }` for a specific MDX file. Throws a readable error if the slug doesn't exist.

MDX frontmatter is exported as `frontmatter` via `remark-mdx-frontmatter`. Type definitions for `Project`, `Experience`, and `Education` are in `src/lib/types.ts`.

### Images

Remote images (from `cdn.hibatillah.site`) use `plaiceholder` for blur placeholders.

**Server side** (`src/lib/remote-image.ts`):
- `getRemoteImage(src)` — wrapped in React `cache()`. Fetches, buffers, and generates base64 blur data.
- `getRemoteImages(sources)` — maps over `getRemoteImage`, inheriting the cache automatically.

**Client side** (`src/hooks/use-remote-image.ts`):
- `useRemoteImage(src: string)` — single-image overload, returns `UseQueryResult<RemoteImage>`
- `useRemoteImage(sources: ImageSource[])` — multi-image overload, returns `{ images, isLoading, isError }`

Both overloads are a single exported function backed by TanStack Query (`useQuery` / `useQueries`) with `staleTime: Infinity`. There is no separate `useRemoteImages`.

Local public-folder paths (e.g. `data.icon`) are **not** remote images — do not pass them to `getRemoteImage` or use `placeholder="blur"` with them.

### UI components

- `src/components/ui/` — shadcn-style primitives (built on **Base UI** `@base-ui/react`, not Radix)
- Animations use **Motion** (`motion/react`) with shared layout animations (e.g., nav underline via `layoutId`)
- Keyboard shortcuts via `react-hotkeys-hook` (keys `1`/`2`/`3` navigate between main routes)
- Theme switching via `next-themes`

### Key conventions

- Linter: **oxlint** (not ESLint). Config in `.oxlintrc.json`.
- Formatter: **oxfmt**. Config in `.oxfmtrc.json`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback` for performance.
- `better-all` is used for concurrent async operations (replaces `Promise.all` with named keys).
- Path alias `@/` maps to `src/`. Always use `@/` imports, never relative `../` paths.
- MDX files support GFM and frontmatter out of the box via remark plugins.
- Twitter `creator` metadata uses `profile.twitterHandle` (the `@handle` string), not `profile.links.x` (a full URL).

### Adding new content

To add a new project/experience/education, create an MDX file in the appropriate `src/contents/` subdirectory with YAML frontmatter matching the corresponding TypeScript interface in `src/lib/types.ts`. The slug is derived from the filename.

To feature content on the homepage, add the slug to the relevant array in `src/contents/profile.json` under `featured`.
