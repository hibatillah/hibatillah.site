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

- `profile.json` — Central config: `url` (the canonical site origin, `https://hibatillah.com` — cascades to `metadataBase`, canonical URLs, OG image URLs, `sitemap.ts`, `json-ld.tsx`, and the robots.txt `Host:`/`Sitemap:` lines, so changing it re-points the whole site), name, description, `twitterHandle` (e.g. `@handle`), and social links. Referenced in `next.config.ts` for `/links/:label` redirects (`mailto:` entries are filtered out). The `featured` field exists but the current home page does not read from it — it's vestigial.
- `edu/`, `exp/`, `projects/`, `components/` — MDX files with YAML frontmatter matching types in `src/lib/types.ts`.

Content is loaded via two server functions in `src/lib/contents.ts`:

- `getContentByCategory<T>(category)` — Returns all frontmatter objects for a category
- `getContentData<T>(category, slug)` — Returns `{ Content, data }` for a specific MDX file. Throws a readable error if the slug doesn't exist.

`ContentCategory` is `"edu" | "exp" | "projects" | "components"`. MDX frontmatter is exported as `frontmatter` via `remark-mdx-frontmatter`. Type definitions (`Experience`, `Education`, `Project`, `Component`) are in `src/lib/types.ts`.

### Images

Local detail-page and home-page images live under `src/static/{edu,exp,project}/` and are imported as `StaticImageData` (Next.js handles blur placeholders automatically for static imports).

The `RemoteImage` type (`src/lib/types.ts`) describes a remote image plus its precomputed thumbhash blur (`{ src, width, height, blurData?, error? }`); `Project.thumbnail` uses it. `ImageFrame` (`src/components/image-frame.tsx`) accepts a `RemoteImage` and decodes its `blurData` to a `blurDataURL` for `next/image`.

To decode a thumbhash blur on the client, use `decodeThumbhash` from `@/lib/thumbhash` (which wraps `thumbHashToDataURL`) and pass the result as `blurDataURL` on `next/image`.

> The former `src/lib/remote-image.ts` server helpers (`getRemoteImage`/`getRemoteImages`) and the `use-remote-image` client hook were removed as dead code — nothing produced `RemoteImage` objects through them. There is **no remote image CDN**: every thumbnail is a local static import, so `next.config.ts` has no `images.remotePatterns`. The `RemoteImage` type and `Project.thumbnail` field remain typed but unused. `sharp` is retained for Next.js production image optimization of the local static images.

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

### SEO & metadata

The root `metadata` in `src/app/layout.tsx` uses a title template: `{ default: profile.name, template: "%s | ${profile.title}" }`. Detail pages pass `title`/`description` from their `generateMetadata` and inherit the brand suffix; each also sets a top-level `description`.

- **Structured data** — `src/components/json-ld.tsx` exports `JsonLd` (one `application/ld+json` `@graph` of `Person` + `WebSite` + `ProfilePage` from `profile.json`, with `sameAs` linking social profiles; rendered once in the root layout body — the entity grounding that lets answer engines attribute the site to the name) and `BreadcrumbJsonLd` (a `BreadcrumbList` rendered by each detail page as a flat `Home › <title>` trail — there is no category listing page, so never link a non-existent `/projects`).
- **OG images** — generated with `next/og` (`ImageResponse` + Satori) via a shared renderer in `src/lib/og.tsx` (`renderOgImage`, `OgFrame`, `OG_SIZE`, `OG_CONTENT_TYPE`; `OgFrameProps` is `{ eyebrow, title, description }`). Route files: `src/app/opengraph-image.tsx` (home) and `src/app/(app)/{project,work,edu}/[slug]/opengraph-image.tsx` (per-item, data via `getContentData`). Fonts load from bundled **`.ttf`** files in `src/static/fonts/og/` (Satori cannot read the `.woff2` used elsewhere). Next serves dynamic OG images at a hashed URL (e.g. `opengraph-image-1shh5a?<hash>`), not the clean path.
  - **Satori `tw` caveat**: Satori supports only a subset of Tailwind. Arbitrary `font-[...]` (font-family), arbitrary `tracking-[...]` (letter-spacing), `text-pretty`, and `-950` color shades are **silently dropped**. Use inline `style` for `fontFamily` and `letterSpacing`; everything else (sizes, named + arbitrary `bg-[#hex]`/`text-[#hex]` colors, `leading-[...]`) works via `tw`. The `tw` prop is enabled by a `declare module "react"` augmentation in `og.tsx`.
- **`manifest.ts`** — minimal web manifest (`display: "browser"`, not a PWA), theme/background `#FCFCFC`, reusing `icon.png`.
- **`robots.txt`** (`src/app/robots.txt/route.ts`, a hand-built route handler — **not** the `robots.ts` metadata file, which can't emit a `Content-Signal:` line) — allow-all plus an explicit `aiCrawlers` allow-list (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) welcoming answer engines by name; sets `host`, links `sitemap.xml`, and declares Content Signals (`Content-Signal: search=yes, ai-input=no, ai-train=no`) per [contentsignals.org](https://contentsignals.org).
- **`sitemap.ts`** — home + every detail route, URLs built from frontmatter `slug`. (Note: `llms.txt` and the `.md` endpoints are deliberately **not** in the sitemap — `llms.txt` is a root-convention file like `robots.txt`, and the `.md` routes are alternate representations of pages already listed.)

### Agent & LLM accessibility

Beyond search SEO, the site exposes machine-readable representations for autonomous agents:

- **`/llms.txt`** (`src/app/llms.txt/route.ts`) — a curated, grouped markdown map of the site (per [llmstxt.org](https://llmstxt.org)), generated from the MDX content via `getContentByCategory`. Each entry links to the page's `.md` endpoint. Discovered by convention at the root.
- **Markdown endpoints** — `/project/<slug>.md`, `/work/<slug>.md`, `/edu/<slug>.md` return the raw MDX (frontmatter + prose, ESM `import`s stripped) as `text/markdown`. Served by `src/app/raw/[type]/[slug]/route.ts`, reached via `*.md` → `/raw/[type]/[slug]` rewrites in `next.config.ts` (the handler's `TYPE_TO_CATEGORY` maps `project→projects`, `work→exp`, `edu→edu`). The page-route slug must equal the MDX filename for both the page and its `.md` endpoint to resolve.
- **Self-advertised alternates** — each detail page's `generateMetadata` sets `alternates.types["text/markdown"]` so the rendered HTML carries `<link rel="alternate" type="text/markdown" href="…/<slug>.md">` (the web-standard way to point agents at the markdown version). A page-level `alternates` replaces the inherited root one, so each detail page re-declares its own `canonical` there too.
- **`Link` response headers (RFC 8288)** — `headers()` in `next.config.ts` adds an HTTP `Link` header so agents discover the machine-readable representations without parsing HTML: home → `</llms.txt>; rel="describedby"`, each detail page → `</<type>/<slug>.md>; rel="alternate"; type="text/markdown"` (the header twin of the in-HTML alternate; Next interpolates the `:slug` source param into the header value).
- **Markdown content negotiation** (`src/proxy.ts` — Next 16 renamed the `middleware` file convention to `proxy`; the exported fn is `proxy`, `config.matcher` unchanged) — when a request carries `Accept: text/markdown`, the proxy rewrites (URL-preserving) `/` → `/llms.txt` and `/project|work|edu/<slug>` → `/raw/<type>/<slug>`. Browsers (`Accept: text/html`) fall through to HTML. The matcher's `[^/.]+` excludes `<slug>.md` paths (those go through the `next.config.ts` rewrites instead). `llms.txt`'s route branches its `Content-Type` on the same `Accept` header so direct human visits stay `text/plain` (viewable) while negotiated requests get `text/markdown`; both it and the raw handler send `Vary: Accept`.

### Key conventions

- Linter: **oxlint** (not ESLint). Config in `.oxlintrc.json`.
- Formatter: **oxfmt**. Config in `.oxfmtrc.json`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback`.
- `better-all` is available for concurrent async with named keys, but chaining `this.$.foo` between named tasks currently breaks the type inference — extract downstream work outside the `all({})` block instead.
- Path alias `@/` maps to `src/`. Always use `@/` imports, never relative `../` paths.
- MDX files support GFM and frontmatter out of the box via remark plugins.
- Twitter `creator` metadata uses `profile.twitterHandle` (the `@handle` string), not `profile.links.x` (a full URL).

### Adding new content

To add a new project/experience/education/component, create an MDX file in the appropriate `src/contents/` subdirectory (`projects/`, `exp/`, `edu/`, `components/`) with YAML frontmatter matching the corresponding TypeScript interface in `src/lib/types.ts`. The slug is derived from the filename.

To surface a new item on the home page, add a static-image import and entry to the relevant array (`works`, `educations`, or `projects`) in `src/app/(app)/_components/content.ts`.
