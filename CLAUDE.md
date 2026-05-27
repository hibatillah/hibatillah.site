# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **Bun** as the package manager (required ≥1.3.5, Node ≥24.12).

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

User-facing pages live under `src/app/(app)/` with a shared layout (single-page overview + detail routes):

- `/` — Overview (home): brief, work, education, and project sections
- `/work/[slug]` — Experience detail (MDX)
- `/edu/[slug]` — Education detail (MDX)
- `/project/[slug]` — Project detail (MDX)

Listing pages and `/explore` were removed in the redesign. Home-page section data (titles, years, slugs, and stacked thumbnail images) is defined statically in `src/app/(app)/_components/content.ts` — it is NOT derived from `profile.json` or from the MDX content directories. To change what appears on the home page, edit that file.

### Content system

All portfolio content lives in `src/contents/`:

- `profile.json` — Central config: name, description, CDN base URL (`asssets`, note triple-s), `twitterHandle` (e.g. `@handle`), and social links. Referenced in `next.config.ts` for `/links/:label` redirects (`mailto:` entries are filtered out). The `featured` field exists but the current home page does not read from it — it's vestigial.
- `edu/`, `exp/`, `projects/`, `components/` — MDX files with YAML frontmatter matching types in `src/lib/types.ts`.

Content is loaded via two server functions in `src/lib/contents.ts`:
- `getContentByCategory<T>(category)` — Returns all frontmatter objects for a category
- `getContentData<T>(category, slug)` — Returns `{ Content, data }` for a specific MDX file. Throws a readable error if the slug doesn't exist.

`ContentCategory` is `"edu" | "exp" | "projects" | "components"`. MDX frontmatter is exported as `frontmatter` via `remark-mdx-frontmatter`. Type definitions (`Experience`, `Education`, `Project`, `Component`) are in `src/lib/types.ts`.

### Images

Local detail-page and home-page images live under `src/static/{edu,exp,project}/` and are imported as `StaticImageData` (Next.js handles blur placeholders automatically for static imports).

Remote images (from `cdn.hibatillah.site`) use **thumbhash** + **sharp** for blur placeholders (replaced `plaiceholder`).

**Server side** (`src/lib/remote-image.ts`):
- `getRemoteImage(src)` — wrapped in React `cache()`. Fetches, resizes via sharp to 100×100, then generates a base64-encoded thumbhash. Returns `{ src, width, height, blurData?, error? }`.
- `getRemoteImages(sources)` — maps over `getRemoteImage` (via `Promise.all`), inheriting the cache automatically. Returns a `Record<key, RemoteImage>`.

**Client side** (`src/hooks/use-remote-image.ts`):
- `useRemoteImage(src: string)` — single-image overload, returns `UseQueryResult<RemoteImage>`
- `useRemoteImage(sources: ImageSource[])` — multi-image overload, returns `{ images, isLoading, isError }`

Both overloads are a single exported function backed by TanStack Query (`useQuery` / `useQueries`) with `staleTime: Infinity`.

To decode a thumbhash blur on the client, use `decodeThumbhash` from `@/lib/thumbhash` and pass the result as `blurDataURL` on `next/image`.

### UI components

- `src/components/ui/` — shadcn-style primitives (built on **Base UI** `@base-ui/react`, not Radix). Custom SVG icon components live under `src/components/ui/svgs/`.
- `src/components/image-frame.tsx` — `ImageFrame` is a polaroid-style frame with optional preset `offset` (translate + rotate) from `STACK_OFFSETS`, plus `spread`, `apply` (`rest`/`hover`/`both`), `transform` (`translate`/`rotate`/`both`), and `trigger` (`group`/`self`) props. Pair with `ImageFrameGrid` (`layout="grid" | "stack"`) for layouts like the home-page section thumbnails. Hover transforms are driven by data attributes + arbitrary Tailwind transform classes — do not move them into inline styles (specificity will break the hover variant).
- `src/components/contents.tsx` — MDX component overrides. `Heading2` and `Heading3` slugify their text children (via `slugify` in `@/lib/utils`) and render as `motion.a` with `href="#slug"` so each heading is a self-anchor with a hover link icon.
- Animations use **Motion** (`motion/react`) with stagger variants from `@/lib/animations`. Use `motion.create(Component)` to wrap third-party components.
- Theme switching via `@ecosy/next-themes` (a React 19-compatible fork).
- Keyboard shortcuts via `react-hotkeys-hook` are scoped to the logo and theme switcher only (the old 1/2/3 route-nav shortcuts were removed with `navigation.tsx`).

### Fonts

Three fonts are loaded in `src/app/layout.tsx`:
- `Geist` (sans) and `Geist_Mono` from `next/font/google`, exposing `--font-geist-sans` and `--font-geist-mono`.
- `Calloveya` (signature script) from `next/font/local` at `src/static/fonts/Calloveya.woff2`. The next/font CSS variable is `--font-calloveya-raw`; the Tailwind theme remaps it to `--font-calloveya` in `globals.css` (the rename avoids a self-referencing CSS variable). Use the `font-calloveya` Tailwind utility.

### Key conventions

- Linter: **oxlint** (not ESLint). Config in `.oxlintrc.json`.
- Formatter: **oxfmt**. Config in `.oxfmtrc.json`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback`.
- `better-all` is available for concurrent async with named keys, but chaining `this.$.foo` between named tasks currently breaks the type inference — extract downstream work outside the `all({})` block instead.
- Path alias `@/` maps to `src/`. Always use `@/` imports, never relative `../` paths.
- MDX files support GFM and frontmatter out of the box via remark plugins.
- Twitter `creator` metadata uses `profile.twitterHandle` (the `@handle` string), not `profile.links.x` (a full URL).
- The CDN key in `profile.json` is `asssets` (three `s`s) — preserved intentionally for compatibility.

### Adding new content

To add a new project/experience/education/component, create an MDX file in the appropriate `src/contents/` subdirectory (`projects/`, `exp/`, `edu/`, `components/`) with YAML frontmatter matching the corresponding TypeScript interface in `src/lib/types.ts`. The slug is derived from the filename.

To surface a new item on the home page, add a static-image import and entry to the relevant array (`works`, `educations`, or `projects`) in `src/app/(app)/_components/content.ts`.
