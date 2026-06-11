---
version: alpha
name: Hibatillah-portfolio-design-analysis
description: "A monochrome, document-grade personal portfolio canvas built on a near-white page (oklch 99%) in light mode and a deep neutral gray (oklch 14.5%) in dark mode, with NO chromatic accent on the web surface — every surface, control, and link works in pure gray (the social Open Graph card is the single exception, using a blue-600 eyebrow for share-thumbnail legibility). The system reads as personal-essay typography: a narrow centered column (max-w-2xl, ~672px), generous vertical rhythm (gap-12 between sections on md+), uppercase monospaced section labels (Geist Mono, text-xs, tracking-widest) acting as table-of-contents headings above relaxed body paragraphs. The only decorative element is the polaroid-style ImageFrame — a white-bordered photo tile with a soft drop shadow, pre-rotated and translated via offset presets (tl/tr/bl/br/l/r/t/b/c), arranged as stacks on the home page that fan apart on hover. The signature Calloveya script wordmark in the footer is the single non-functional flourish — a hand-signed end-mark, not a brand accent."

colors:
  ink: "oklch(0.145 0 0)"
  ink-inverse: "oklch(0.985 0 0)"
  ink-muted: "oklch(0.556 0 0)"
  ink-subtle: "oklch(0.708 0 0)"
  canvas: "oklch(0.99 0 0)"
  surface-card: "oklch(1 0 0)"
  surface-muted: "oklch(0.97 0 0)"
  surface-secondary: "oklch(0.97 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-foreground: "oklch(0.985 0 0)"
  hairline: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  polaroid: "#ffffff"
  polaroid-dark: "oklch(0.87 0 0)"

colors-dark:
  ink: "oklch(0.985 0 0)"
  ink-inverse: "oklch(0.145 0 0)"
  ink-muted: "oklch(0.708 0 0)"
  ink-subtle: "oklch(0.556 0 0)"
  canvas: "oklch(0.145 0 0)"
  surface-card: "oklch(0.205 0 0)"
  surface-muted: "oklch(0.269 0 0)"
  surface-secondary: "oklch(0.269 0 0)"
  primary: "oklch(0.922 0 0)"
  primary-foreground: "oklch(0.205 0 0)"
  hairline: "oklch(1 0 0 / 10%)"
  ring: "oklch(0.556 0 0)"

typography:
  h1:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  section-label:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1em
    textTransform: uppercase
  heading-md:
    fontFamily: Geist Sans
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: 0
  heading-sm:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: 0
  body:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  body-sm:
    fontFamily: Geist Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  meta:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
    fontVariantNumeric: tabular-nums
  signature:
    fontFamily: Calloveya
    fontSize: 2.25rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
  code:
    fontFamily: Geist Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0

rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.625rem
  xl: 0.875rem
  xxl: 1.125rem
  xxxl: 1.375rem
  xxxxl: 1.625rem
  pill: 9999px
  full: 9999px

spacing:
  xxs: 0.25rem
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  xxl: 3rem
  container-y: 3rem
  container-x: 1.5rem
  container-max: 42rem

components:
  page-shell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    maxWidth: "{spacing.container-max}"
    padding: "3rem 1.5rem"
    layout: "flex column, gap-6 on mobile, gap-12 on md+"
  header:
    layout: "flex row, items-start, justify-between, gap-6"
    titleTypography: "{typography.h1}"
    descriptionTypography: "{typography.body}"
    logoSize: "32px"
  section:
    typography: "{typography.body}"
    spacingY: "{spacing.sm}"
    labelTypography: "{typography.section-label}"
    labelColor: "{colors.ink-muted}"
  paragraph:
    typography: "{typography.body}"
    textColor: "{colors.ink-muted}"
    textWrap: pretty
  text-link:
    textColor: inherit
    hoverTextColor: "{colors.ink}"
    underlineColor: "currentColor / 50%"
    underlineHoverColor: "currentColor"
    underlineOffset: "2px"
    focusBackgroundColor: "{colors.surface-muted}"
    focusRingColor: "{colors.ring}"
  item-row:
    backgroundColor: transparent
    hoverBackgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
    gap: "10px"
    typography: "{typography.body-sm}"
    titleTypography: "{typography.heading-sm}"
    descriptionTypography: "{typography.body-sm}"
    descriptionColor: "{colors.ink-muted}"
    metaTypography: "{typography.meta}"
  image-frame:
    backgroundColor: "{colors.polaroid}"
    backgroundColorDark: "{colors.polaroid-dark}"
    padding-sm: "0.25rem"
    padding-default: "0.5rem"
    padding-lg: "1rem"
    shadow-sm: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
    shadow-default: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
    aspectRatio: "16/9"
    transitionDuration: "300ms"
    transitionEasing: "ease-out"
  image-frame-grid-stack:
    layout: "relative inline-grid, all children share row/col-start-1"
    behavior: "Each child uses an offset preset (tl/tr/bl/br/l/r/t/b/c) to fan out; --tx/--ty/--tr at rest, --htx/--hty/--htr on group hover"
  heading-anchor:
    typography: "{typography.heading-md}"
    iconSize: "14px"
    iconColor: "{colors.ink-muted}"
    iconVisibility: "hidden by default, visible on heading hover"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    signatureTypography: "{typography.signature}"
    layout: "flex column-reverse on mobile, row with baseline-aligned items on sm+"
  pre-code:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.xl}"
    padding: "1rem"
  blockquote:
    borderLeft: "2px {colors.ink-muted}"
    textColor: "{colors.ink-muted}"
    padding-left: "0.75rem"
    fontStyle: italic
  separator:
    color: "{colors.hairline}"
    height: "1px"
  table:
    headerWeight: 400
    headerColor: "{colors.ink}"
    cellColor: "{colors.ink-muted}"
    rowBorderBottom: "1px {colors.hairline}"
    typography: "{typography.body-sm}"
  og-image:
    surface: "social share card, 1200×630 (src/lib/og.tsx)"
    canvas: "neutral-100"
    layout: "flex column justify-end (bottom-aligned), px-20 pb-24"
    eyebrowTypography: "Geist Mono, 20px, uppercase, tracking 0.18em"
    eyebrowColor: "blue-600 (#2563eb) — sole chromatic accent, OG surface only"
    titleTypography: "Geist Sans, 72px, weight 700, tracking -0.02em"
    titleColor: "{colors.ink}"
    descriptionTypography: "Geist Sans, 30px, leading 1.4"
    descriptionColor: "{colors.ink-muted}"
    fonts: ".ttf only (Satori cannot read .woff2)"
---

## Overview

This portfolio is a **single-column document** — not a marketing page, not a dashboard, not a gallery. The architecture is `flex flex-col` inside `max-w-2xl mx-auto`, with `py-12` vertical padding and `gap-12` between sections on `md+` (`gap-6` on mobile). Every page lives inside this container; there is no full-bleed hero, no sidebar, no second column.

The voice is **monochrome**. Tokens are defined in OKLCH with chroma `0`: light mode runs from `{colors.canvas}` (oklch 99% — barely-off-white) through `{colors.ink-muted}` (50.6%) to `{colors.ink}` (14.5% — near-black). Dark mode inverts to canvas 14.5% → ink 98.5%. There is no brand color, no accent, no chromatic CTA on the web surface. The `chart-*` and `destructive` tokens exist for shadcn primitives but are not used in the marketing surface. The **single chromatic mark in the whole system is the `blue-600` eyebrow on the Open Graph share card** (see [Open Graph Image](#open-graph-image)) — it never appears on a rendered page.

Section structure follows a **mono-label + body** rhythm: `<h2>` is rendered in Geist Mono at `text-xs` with `uppercase` and `tracking-widest`, acting as a fine taxonomy mark. Below it, `<p>` is Geist Sans at `text-base/relaxed` in `{colors.ink-muted}` — body type is intentionally one step softer than headings.

The decorative engine is the **polaroid frame**. `ImageFrame` is a white tile (`#ffffff` in light, `oklch(0.87 0 0)` in dark) with `p-2` padding and a soft `shadow-lg`. `ImageFrameGrid layout="stack"` overlays multiple frames in the same grid cell; each frame's `offset` prop (`tl`, `tr`, `bl`, `br`, `l`, `r`, `t`, `b`, `c`) maps to a preset pair of `--tx/--ty/--tr` (rest) and `--htx/--hty/--htr` (hover) CSS custom properties applied via arbitrary Tailwind transform utilities. On `.group:hover`, the stack fans out.

The closing flourish is the **Calloveya signature** in the footer — a hand-script font (loaded locally from `src/static/fonts/Calloveya.woff2`) that renders "Hibatillah" at `text-4xl font-medium`. It's the only typeface that breaks the Geist sans/mono pair, and it appears exactly once per page.

**Key characteristics:**

- **Monochrome OKLCH** — every neutral has chroma 0; no chromatic primary, no semantic accent on marketing.
- **Narrow document column** — `max-w-2xl` (~672px) centered, `py-12`, no sidebar, no multi-column.
- **Mono section labels** — `<h2>` is `font-mono text-xs uppercase tracking-widest`, never a sans display.
- **Sans body in ink-muted** — `<p>` defaults to `{colors.ink-muted}`, not the canvas ink, so headings naturally read as emphasis.
- **Polaroid stacks** — `ImageFrame` + `ImageFrameGrid layout="stack"` with `STACK_OFFSETS` is the dominant visual motif.
- **Calloveya signature** — single decorative typeface, single occurrence (footer wordmark).
- **No shadows in chrome** — only the polaroid frame uses `shadow-lg`. Cards, items, and buttons rely on background lift and hairline borders.
- **Underlined inline links** — `TextLink` ships with `decoration-current/50` and an `underline="hover"` variant that hides the line until hover on sm+.

## Colors

> Source: `src/app/globals.css`. Tokens are CSS custom properties on `:root` and `.dark`, exposed to Tailwind via `@theme inline`.

### Ink (text)

- **Ink** (`{colors.ink}`): Primary text — headings, emphasized body. Light: `oklch(0.145 0 0)` (near-black). Dark: `oklch(0.985 0 0)` (near-white).
- **Ink Muted** (`{colors.ink-muted}`): Default body text — `<p>` ships at this color globally via `@layer base`. Light: `oklch(0.556 0 0)` (mid-gray). Dark: `oklch(0.708 0 0)` (light-mid gray).
- **Ink Subtle** (`{colors.ink-subtle}`): Tertiary — disabled states, the focus ring color. Light: `oklch(0.708 0 0)`. Dark: `oklch(0.556 0 0)`.

### Surface

- **Canvas** (`{colors.canvas}`): Page background. Light: `oklch(0.99 0 0)` (intentionally one step off pure white). Dark: `oklch(0.145 0 0)`.
- **Surface Card** (`{colors.surface-card}`): Card background — `Pre` code block, snippet card. Light: `oklch(1 0 0)` (pure white, contrasts with the off-white canvas). Dark: `oklch(0.205 0 0)`.
- **Surface Muted** (`{colors.surface-muted}`): Hover lift for `Item` rows, link focus background. Light: `oklch(0.97 0 0)`. Dark: `oklch(0.269 0 0)`.
- **Hairline** (`{colors.hairline}`): 1px borders (separator, table row rule, item outline variant). Light: `oklch(0.922 0 0)`. Dark: `oklch(1 0 0 / 10%)`.

### Primary

- **Primary** (`{colors.primary}`): Solid button fill (`<Button>` default variant). Light: `oklch(0.205 0 0)` (charcoal). Dark: `oklch(0.922 0 0)` (light gray).
- **Primary Foreground** (`{colors.primary-foreground}`): Text on primary button. Light: `oklch(0.985 0 0)`. Dark: `oklch(0.205 0 0)`.

### Polaroid

- **Polaroid White** (`{colors.polaroid}`): The polaroid border color in light mode — `#ffffff`. Always pure white regardless of canvas tint.
- **Polaroid Dark** (`{colors.polaroid-dark}`): Polaroid border in dark mode — `neutral-200` ≈ `oklch(0.87 0 0)`. The frame stays pale so the photo reads as a printed object on the dark page; inner images get `dark:brightness-95` to compensate.

### Non-marketing

- `chart-1`..`chart-5`, `destructive`, `sidebar-*` exist for shadcn primitives but are **not used** on any portfolio surface — the home page, MDX detail pages, and chrome are entirely the tokens above.

## Typography

### Font Family

- **Geist Sans** — loaded via `next/font/google` in `src/app/layout.tsx`, exposed as `--font-geist-sans` and as the Tailwind `font-sans` default. Carries h1, body, item titles, link text.
- **Geist Mono** — loaded via `next/font/google`, exposed as `--font-geist-mono` and the `font-mono` utility. Carries section labels (`<h2>`), year meta (`tabular-nums`), code, pre blocks.
- **Calloveya** — loaded locally via `next/font/local` from `src/static/fonts/Calloveya.woff2`. The raw next/font variable is `--font-calloveya-raw`; the Tailwind theme remaps it to `--font-calloveya` to avoid self-reference. Use `font-calloveya`. Appears once: footer signature.

### Hierarchy

| Token                        | Size            | Weight | Line Height | Family                                  | Use                                                         |
| ---------------------------- | --------------- | ------ | ----------- | --------------------------------------- | ----------------------------------------------------------- |
| `{typography.h1}`            | 16px (1rem)     | 500    | 1.4         | Geist Sans                              | Page heading (`<h1>` in `Header`)                           |
| `{typography.section-label}` | 12px            | 400    | 1.5         | Geist Mono · uppercase · tracking 0.1em | All `<h2>` section labels (Brief, Work, Edu, Project, More) |
| `{typography.heading-md}`    | 18px            | 400    | 1.375       | Geist Sans                              | MDX `<h2>` via `Heading2`                                   |
| `{typography.heading-sm}`    | 16px            | 400    | 1.375       | Geist Sans                              | MDX `<h3>` via `Heading3`; Item title                       |
| `{typography.body}`          | 16px            | 400    | 1.625       | Geist Sans                              | Default `<p>` — ships as `{colors.ink-muted}`               |
| `{typography.body-sm}`       | 14px            | 400    | 1.5         | Geist Sans                              | Footer copy, item rows                                      |
| `{typography.meta}`          | 12px            | 400    | 1.4         | Geist Mono · tabular-nums               | Year column on home-page rows                               |
| `{typography.signature}`     | 36px (text-4xl) | 500    | 1.1         | Calloveya                               | Footer wordmark, exactly once                               |
| `{typography.code}`          | 14px            | 400    | 1.625       | Geist Mono                              | Inline code, `Pre` blocks                                   |

### Principles

- **Section labels are mono, uppercased, and small.** Geist Mono at `text-xs uppercase tracking-widest` — never a sans display heading. This is the entire reason the page reads as a "document."
- **Body defaults to muted.** `@layer base p { color: var(--color-muted-foreground) }` — so emphasis comes from the _absence_ of muting (a `<strong>`, an `<h2>`, a `<Heading2>`), not from added color.
- **One signature, one font.** Calloveya appears only as the footer wordmark. Do not use it for headlines, CTAs, or accents.
- **Tabular numerals on year metadata.** The right-aligned year column on each home-page row uses `font-mono tabular-nums` so digits align across rows.
- **No display-tracking magic.** Headings are sans, weight 400–500, with default letter-spacing — the personality lives in the mono labels and the polaroid stacks, not in oversized headlines.

### Heading anchors (MDX)

`Heading2` and `Heading3` in `src/components/contents.tsx` slugify their text children and render the heading as a `motion.a` with `href="#slug"`. On hover, a small `LinkIcon` (14px) appears to the left at `-left-5` (mobile) / `-left-6` (md+). Use plain text children only — `Heading2` falls back to no anchor if children aren't a string.

## Layout

### Container

- **Width**: `max-w-2xl` (~672px), centered with `mx-auto`. Never widen.
- **Padding**: `py-12` (3rem vertical). Horizontal padding is `px-6` on `max-md`; on `md+` the container has no horizontal padding (the width cap handles inset).
- **Section spacing**: `gap-6` on mobile, `gap-12` on `md+` between top-level children of the layout (header, sections, footer).
- **Within a section**: `space-y-3` between the `<h2>` label and the `<article>` body (set globally via `@layer base section { @apply space-y-3 }`).
- **Within an article**: `space-y-1` between paragraphs.

### Spacing tokens

`{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px.

These are Tailwind spacing scale values used throughout — no custom CSS variables for spacing.

### Item rows (home-page list pattern)

Each row in the Work/Edu/Project sections is a `<Link>`-rendered `Item` with three columns:

1. **`ItemMedia`** — polaroid stack (typically 1–3 frames).
2. **`ItemContent ml-6`** — title (`{typography.heading-sm}`) over description (`{typography.body-sm}` in `{colors.ink-muted}`), title `line-clamp-1`.
3. **`ItemContent flex-none text-center`** — year in `{typography.meta}` (`font-mono text-xs tabular-nums`).

The row uses `mx-[-13px]` negative margin to let the hover background extend slightly past the column edge.

### Whitespace philosophy

The canvas IS the whitespace. There are no panels separating sections — section identity is carried by the mono `<h2>` label and the vertical `gap-12` between sections. The page reads as a continuous document, not a stack of cards.

## Elevation & Depth

| Level               | Treatment                                                    | Use                                                         |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| 0 (flat)            | No shadow, no border, transparent background                 | Sections, paragraphs, headings, the page itself             |
| 1 (hairline)        | 1px `{colors.hairline}` border, no shadow                    | `Item variant="outline"`, table row bottom rule, separators |
| 2 (background lift) | `{colors.surface-muted}` background on hover, no border      | `Item` rows on hover (carries the home-page row affordance) |
| 3 (card lift)       | `{colors.surface-card}` background, `rounded-xl`             | `Pre` code block, Snippet card                              |
| 4 (polaroid)        | White/pale frame + `shadow-md` (sm) or `shadow-lg` (default) | `ImageFrame` — the only element that uses a drop shadow     |

**The page is otherwise flat.** Buttons don't lift, links don't lift, sections don't lift. Depth is reserved for the polaroid stack and the focus ring.

### Focus ring

Interactive elements use a `focus-visible:ring-[3px] focus-visible:ring-ring/50` outline at `{colors.ring}` 50% opacity, plus a `border-ring` accent. `TextLink` instead paints a `bg-muted` pill behind the text with a `ring-1 ring-ring/50` outline — link focus is a background lift, not an outline.

## Shapes

### Border Radius Scale

`globals.css` defines `--radius: 0.625rem` (10px) and derives the rest:

| Token                               | Value                   | Use                                          |
| ----------------------------------- | ----------------------- | -------------------------------------------- |
| `{rounded.sm}`                      | 6px (`--radius - 4px`)  | Focus-pill behind `TextLink` text            |
| `{rounded.md}`                      | 8px (`--radius - 2px`)  | Buttons, small inputs                        |
| `{rounded.lg}`                      | 10px (`--radius`)       | `Item` rows (the default home-page list row) |
| `{rounded.xl}`                      | 14px (`--radius + 4px`) | `Pre` code blocks, Snippet card              |
| `{rounded.xxl}`                     | 18px (`--radius × 1.8`) | Oversized card variants                      |
| `{rounded.xxxl}`                    | 22px                    | Hero-style framed media                      |
| `{rounded.xxxxl}`                   | 26px                    | Rare oversized inset panels                  |
| `{rounded.pill}` / `{rounded.full}` | 9999px                  | Avatars, the rare pill control               |

### Polaroid frame geometry

- **Aspect ratio**: `aspect-video` (16:9) on the outer frame; inner `<img>` is `size-full object-cover`.
- **Padding (frame border)**: `data-[size=sm]:p-1` · default `p-2` · `data-[size=lg]:p-4`.
- **Shadow**: `shadow-md` on `size="sm"`, `shadow-lg` otherwise.
- **Sizing**: `h-auto max-h-96 min-w-20`. On the home page, frames are constrained with `w-24` (96px).

### Offset presets (`STACK_OFFSETS`)

Each preset is `{ x, y, r, hx, hy, hr }` in pixels and degrees — `x/y/r` apply at rest, `hx/hy/hr` apply on `.group:hover`.

| Preset | Rest (x, y, r)   | Hover (hx, hy, hr) | Intent                           |
| ------ | ---------------- | ------------------ | -------------------------------- |
| `tl`   | -12px, -9px, -8° | -32px, -24px, -9°  | Top-left, counter-clockwise tilt |
| `tr`   | 5px, -8px, -4°   | 31px, -20px, -2°   | Top-right, slight tilt           |
| `bl`   | -9px, 4px, -6°   | -24px, 13px, -7°   | Bottom-left                      |
| `br`   | 3px, 9px, 5°     | 24px, 18px, 8°     | Bottom-right                     |
| `l`    | -10px, 1px, -2°  | -15px, 9px, -8°    | Left                             |
| `r`    | 12px, 9px, 5°    | 32px, 8px, 8°      | Right                            |
| `t`    | 2px, -9px, 2°    | 4px, -12px, 5°     | Top                              |
| `b`    | -3px, 7px, -3°   | -5px, 22px, -4°    | Bottom                           |
| `c`    | 1px, -1px, 0°    | 2px, -3px, 2°      | Center anchor                    |

The transforms are applied via **arbitrary Tailwind utilities** that read the `--tx/--ty/--tr/--htx/--hty/--htr` variables — they are not inline styles. Moving them to inline styles will break the `group-hover:` specificity.

## Components

### Header (`src/components/header.tsx`)

The page-top heading. `flex items-start justify-between gap-6` with the name + role on the left and the `Logo` on the right.

- Heading typography `{typography.h1}` (`font-medium`).
- Description renders as `<p>`, picking up the global muted color.
- Logo is a 32px component on the right edge.

### Sections (`src/app/(app)/_components/sections.tsx`)

Three home-page sections (`WorkSection`, `EduSection`, `ProjectSection`) share one shape: a `<section>` with an `<h2>` label and an `<ItemGroup>` of `<Item>` rows. Each row is `<Link>`-rendered with three columns (polaroid stack, title/description, year).

- Background: transparent.
- Hover: `Item` row lifts to `{colors.surface-muted}` via `[a]:hover:bg-muted` (declared in `itemVariants`).
- Rounded: `{rounded.lg}` 10px.
- Padding: `px-3 py-2.5` (default item size).
- Negative gutter: `mx-[-13px]` extends the hover background slightly past the column edge.

### `ImageFrame` (`src/components/image-frame.tsx`)

The polaroid tile. See **Shapes → Offset presets** for transform behavior.

Props:

- **`size`** (`sm` | `default` | `lg`) — sets frame padding (`p-1` / `p-2` / `p-4`) and shadow (`shadow-md` / `shadow-lg`).
- **`offset`** (`StackOffset`) — preset name from `STACK_OFFSETS`; omit for a flat frame.
- **`spread`** (number, default 1) — multiplier on the preset's translate values (rotation is _not_ scaled).
- **`apply`** (`rest` | `hover` | `both`, default `both`) — when the offset transform applies.
- **`transform`** (`translate` | `rotate` | `both`, default `both`) — which parts of the offset are used.
- **`trigger`** (`group` | `self`, default `group`) — `.group:hover` (nearest ancestor) or self-hover.

### `ImageFrameGrid` (`layout="grid" | "stack"`)

- **`grid`** — responsive grid (`grid-cols-1` mobile, `grid-cols-2` sm+, `gap-2`, `place-items-center`).
- **`stack`** — `relative inline-grid` with all children placed in `col-start-1 row-start-1`. The frames overlap in the same cell and fan apart on `.group:hover` via their per-frame offsets.

### `TextLink` (`src/components/text-link.tsx`)

Inline link with three underline modes:

- **`always`** (default) — persistent `decoration-current/50` underline at `underline-offset-2`.
- **`hover`** — underline hidden until hover on `sm+`; on `max-sm` it stays visible (touch).
- **`none`** — no underline.

Color: inherits, lifts to `{colors.ink}` on hover. External links pass `target="_blank" rel="noopener noreferrer"` via the `external` prop. Inline SVG children render at `size-3` with `stroke-2` and a `ms-0.5` gap. Focus state paints a `{colors.surface-muted}` background pill behind the text with a 1px `{colors.ring}/50` ring.

### `Item` family (`src/components/ui/item.tsx`)

shadcn-style list row built on Base UI `useRender`. Variants:

- `default` — transparent border, `[a]:hover:bg-muted`.
- `outline` — `border-border` hairline.
- `muted` — `bg-muted/50` baseline.

Sizes: `default` / `sm` (both `gap-2.5 px-3 py-2.5`), `xs` (`gap-2 px-2.5 py-2`). All sizes use `rounded-lg` and `transition-colors duration-100`.

### MDX components (`src/components/contents.tsx`)

Used on detail pages. All wrapped with `motion.*` and Motion's `staggerItem` variant — children animate in on scroll-into-view via the outer `Wrapper`'s `staggerContainer`.

- **`Heading2`/`Heading3`** — slugified, anchor-linked via `motion.a href="#slug"`. Hover reveals a 14px `LinkIcon` to the left.
- **`Paragraph`** — `text-base/relaxed text-foreground/70` (slightly lighter than the global `muted-foreground` body to read as recessed detail text).
- **`Blockquote`** — `border-s-2 border-muted-foreground ps-3 italic text-muted-foreground`.
- **`Pre`** — `rounded-xl bg-card p-4 font-mono text-sm leading-relaxed` with `max-lg:mx-4` (full-bleed on mobile).
- **`ListUnordered`/`ListOrdered`** — `ms-6 list-disc/decimal space-y-3`.
- **Tables** — `w-full text-sm` with `hover:bg-muted/50` row hover and `border-b` row rules. Header weight stays at 400.
- **`Snippet`** — package-manager tab card (`npm` / `pnpm` / `yarn` / `bun`) with a copy button. Uses `{colors.surface-card}` background and `rounded-xl` corners.

### Footer (`src/app/(app)/layout.tsx`)

Closes every page. Layout: `flex-col-reverse text-muted-foreground` on mobile, `flex-row items-baseline justify-between` on `sm+`. Left: CC-BY-NC-SA-4.0 link + current year in `body-sm`. Right: the Calloveya signature `Hibatillah` at `text-4xl font-medium font-calloveya select-none leading-tight`.

## Open Graph Image

> Source: `src/lib/og.tsx` (shared `OgFrame` + `renderOgImage`), rendered by the `opengraph-image` routes for the home page and every detail page. Generated with `next/og` (Satori).

The OG card is where the design system is **applied to a share surface** — a 1200×630 social thumbnail that carries the same visual language as the page, scaled up for legibility at thumbnail size. It is the one place the system steps outside pure monochrome.

**Layout** — `flex flex-col justify-end` inside the 1200×630 frame with `px-20 pb-24`, so content is **anchored to the bottom edge** (a poster-like baseline, not centered). Three stacked lines: eyebrow → title → description.

**Type & color** map straight onto the system, with one addition:

| Element     | Treatment                                                       | System mapping                                       |
| ----------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| Eyebrow     | Geist Mono · 20px · `uppercase` · tracking `0.18em` · **blue-600** | the `section-label` register, in the **accent**      |
| Title       | Geist Sans · 72px · weight 700 · ink `#0A0A0A` · tracking `-0.02em` | a large-format display take on `{colors.ink}`        |
| Description | Geist Sans · 30px · `zinc-600` · leading 1.4                     | `{typography.body}` in `{colors.ink-muted}`          |
| Canvas      | `neutral-100` (≈ `oklch 0.97`)                                   | the near-white `{colors.canvas}` register            |

**The blue accent (`blue-600`, `#2563eb`) is the single chromatic mark in the entire system, and it lives only here.** The web surface stays pure monochrome; the OG eyebrow uses blue purely for share-thumbnail recognizability and scannability. Treat it as an OG-only token, never a brand color that spreads to the site.

**Engine constraints (Satori)** — fonts load from bundled **`.ttf`** files in `src/static/fonts/og/` (Satori cannot read the site's `.woff2`). Satori supports only a subset of Tailwind via the `tw` prop: arbitrary `font-[...]`, arbitrary `tracking-[...]`, `text-pretty`, and `-950` shades are silently dropped — so `fontFamily` and `letterSpacing` are set via inline `style`, everything else via `tw`. See `CLAUDE.md → SEO & metadata` for the full caveat.

## Motion

- **Stagger container/item** from `@/lib/animations` drives MDX entrance: children animate in `whileInView` once per scroll.
- **Polaroid hover transitions**: `data-offset:transition-transform data-offset:duration-300 data-offset:ease-out` (300ms ease-out on transform).
- **Item row hover**: `transition-colors duration-100` (100ms — fast, document-grade).
- **Link focus**: no transition — focus ring appears immediately.

React Compiler is enabled. Do not write manual `useMemo`/`useCallback`.

## Do's and Don'ts

### Do

- Keep the page inside `max-w-2xl mx-auto` with `py-12`.
- Use `<h2>` for section labels — Geist Mono, `text-xs`, `uppercase`, `tracking-widest`. They are the chrome.
- Default `<p>` to `{colors.ink-muted}` (it's the global base). Promote to ink only inside MDX `Heading*` / `<strong>`.
- Use polaroid stacks (`ImageFrameGrid layout="stack"` + per-frame `offset`) for media on the home page.
- Tag year metadata with `font-mono text-xs tabular-nums`.
- Use `TextLink underline="hover"` for inline prose links; `underline="always"` for licenses and emphasized references.
- Reserve Calloveya for the footer wordmark only.
- Apply polaroid transforms via arbitrary Tailwind transform utilities reading `--tx/--ty/--tr/--htx/--hty/--htr`. Never move them to inline styles.
- Constrain home-page frames with `w-24` and `size="sm"` (1px frame padding, `shadow-md`).

### Don't

- Don't introduce a chromatic accent color on the web surface — no brand blue, no green, no semantic-success on marketing. The **only sanctioned accent is the OG card's `blue-600` eyebrow** (`src/lib/og.tsx`), which never renders on a page. The `chart-*` and `destructive` tokens stay in shadcn primitives only.
- Don't widen the container past `max-w-2xl` or add a second column.
- Don't use sans display headings for section labels — `<h2>` is mono uppercase.
- Don't use `<h1>` anywhere except the page header (`Header` already renders it).
- Don't add `shadow-*` to non-polaroid surfaces. Depth lives in the polaroid alone.
- Don't use Calloveya for body, headings, CTAs, or marketing copy. It's the signature, not a typeface family.
- Don't put `underline="always"` on hero or CTA copy — the document register expects subtle, hover-revealed underlines on sm+.
- Don't pill-round buttons. Buttons are `{rounded.md}` 8px; the only `rounded-full` element is an avatar.
- Don't drop the negative `mx-[-13px]` gutter on home-page `ItemGroup`s — it carries the row hover affordance past the visual edge.
- Don't add gradients, blurs, or atmospheric backgrounds.
- Don't break the polaroid's `data-offset:` transform composition by setting `transform` inline — `group-hover:` specificity will silently break.

## Responsive Behavior

- **Container width**: fixed `max-w-2xl`. Below `md`, the container picks up `px-6` horizontal padding.
- **Section gap**: `gap-6` on mobile, `gap-12` on `md+`.
- **Header**: stays a single row at all sizes (`items-start justify-between`). The Logo (32px) anchors the right edge.
- **Item rows**: stay a single row at all sizes. The polaroid stack on the left is fixed at `w-24` per frame; the title/description column flexes; the year column is `flex-none`.
- **`ImageFrameGrid layout="grid"`**: `grid-cols-1` on mobile, `grid-cols-2` on `sm+`.
- **`Pre` code blocks**: full-bleed via `max-lg:mx-4` on `<lg` so code doesn't get cramped on narrow screens.
- **`TextLink underline="hover"`**: keeps the underline visible on `max-sm` (no hover), hides it on `sm+`.
- **Footer**: `flex-col-reverse` on mobile (signature on top, license below), `flex-row items-baseline justify-between` on `sm+`.
- **Scrollbar**: thin custom scrollbar on `md+` (`md:scrollbar-thin md:scrollbar-gutter-stable` with track set to `transparent` and thumb to `var(--color-muted-foreground)`).

## Agent Prompt Guide

### Quick reference

- **Canvas**: light `oklch(0.99 0 0)` / dark `oklch(0.145 0 0)`
- **Ink**: light `oklch(0.145 0 0)` / dark `oklch(0.985 0 0)`
- **Body color**: `{colors.ink-muted}` — light `oklch(0.556 0 0)` / dark `oklch(0.708 0 0)`
- **Hairline**: light `oklch(0.922 0 0)` / dark `oklch(1 0 0 / 10%)`
- **Container**: `max-w-2xl mx-auto py-12 px-6 md:px-0` · `gap-6 md:gap-12`
- **Section label**: `font-mono text-xs uppercase tracking-widest`
- **Body**: `text-base/relaxed text-muted-foreground`
- **Polaroid**: `bg-white dark:bg-neutral-200 p-2 shadow-lg rounded-none` (no radius on the frame itself)
- **Year meta**: `font-mono text-xs tabular-nums`
- **Signature**: `font-calloveya text-4xl font-medium leading-tight select-none`

### Ready-to-use prompts

> Build a new section for the home page. Use a `<section>` with a Geist Mono uppercase `<h2>` label at `text-xs tracking-widest`, an `<ItemGroup>` with `mx-[-13px] gap-4!` of `<Item variant="default">` rows rendered as `<Link>`. Each row: `ItemMedia` containing an `ImageFrameGrid layout="stack"` of 1–3 `ImageFrame size="sm" offset="<preset>"` tiles at `w-24`, an `ItemContent ml-6` with a `line-clamp-1` title and a muted description, and a `flex-none text-center` `ItemContent` with a `font-mono text-xs tabular-nums` year. Stay inside the existing `max-w-2xl` shell. Do not add a chromatic accent.

> Build an MDX detail page for a project. Use the same `(app)` layout. Begin with `<Header heading="…" description="…" />`. Wrap MDX content in the `Wrapper` from `@/components/contents`. Use `Heading2` / `Heading3` (they auto-anchor). Body paragraphs render at `text-foreground/70` via `Paragraph`. For code, use fenced blocks — `Pre` renders them at `rounded-xl bg-card p-4 font-mono text-sm`. Do not introduce a hero image outside an `ImageFrame`.

> Compose a single decorative photo. Use `ImageFrame size="default" offset="c" spread={1.2}` inside `ImageFrameGrid layout="stack"` if you want hover motion; omit `offset` for a flat tile. The frame is white in light and `neutral-200` in dark; do not override the frame background.

> Add a new external inline link. Use `<TextLink href="…" external underline="hover">label</TextLink>`. Do not write a raw `<a>`. The focus state is a `bg-muted` pill — do not override it.
