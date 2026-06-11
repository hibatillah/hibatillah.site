import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

// Allow Satori's `tw` Tailwind prop on JSX elements without type errors.
declare module "react" {
	interface HTMLAttributes<T> {
		tw?: string
	}
}

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

const FONT_DIR = join(process.cwd(), "src/static/fonts/og")

async function loadOgFonts() {
	const [sans, sansBold, mono] = await Promise.all([
		readFile(join(FONT_DIR, "Geist-Regular.ttf")),
		readFile(join(FONT_DIR, "Geist-Bold.ttf")),
		readFile(join(FONT_DIR, "GeistMono-Medium.ttf")),
	])

	return [
		{ name: "Geist", data: sans, weight: 400 as const, style: "normal" as const },
		{ name: "Geist", data: sansBold, weight: 700 as const, style: "normal" as const },
		{ name: "Geist Mono", data: mono, weight: 500 as const, style: "normal" as const },
	]
}

export interface OgFrameProps {
	/** Mono uppercase blue line above the title. */
	eyebrow: string
	/** Large bold Geist headline. */
	title: string
	/** Body paragraph. */
	description: string
}

function OgFrame({ eyebrow, title, description }: OgFrameProps) {
	return (
		<div
			tw="flex h-full w-full flex-col justify-end bg-neutral-100 px-20 pb-24"
			style={{ fontFamily: "Geist" }}
		>
			<div
				tw="text-xl text-blue-600 uppercase"
				style={{ fontFamily: "Geist Mono", letterSpacing: "0.18em" }}
			>
				{eyebrow}
			</div>

			<div
				tw="mt-4 text-[72px] leading-[1.25] font-bold text-[#0A0A0A]"
				style={{ letterSpacing: "-0.02em" }}
			>
				{title}
			</div>

			<div tw="mt-4 max-w-[800px] text-3xl leading-[1.4] text-zinc-600">{description}</div>
		</div>
	)
}

/** Renders an OG `ImageResponse` from the shared frame. Use as the default export body of an `opengraph-image` route. */
export async function renderOgImage(props: OgFrameProps) {
	const fonts = await loadOgFonts()

	return new ImageResponse(<OgFrame {...props} />, {
		...OG_SIZE,
		fonts,
	})
}
