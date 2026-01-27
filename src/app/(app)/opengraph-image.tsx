import { getFonts } from "@/lib/utils"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = {
	width: 1200,
	height: 630,
}
export const alt = "Overview | Hibatillah Hasanin"
export const contentType = "image/png"

export default async function Image() {
	const fonts = await getFonts()

	return new ImageResponse(
		<div tw="relative flex h-full w-full flex-col overflow-hidden bg-black px-12 py-20 text-white">
			<div tw="flex h-full flex-col justify-between">
				<div tw="flex flex-col">
					<h1 tw="-mt-4 text-6xl leading-tight font-bold tracking-tight text-white">
						M. Hibatillah Hasanin
					</h1>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						Building scalable, type-safe web applications with modern architecture
					</p>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						Fullstack Web Developer • UI/UX Enthusiast
					</p>
				</div>

				<div tw="flex flex-row justify-between">
					<div tw="text-2xl font-semibold">Overview | Hibatillah Hasanin</div>
					<div tw="text-2xl font-semibold">hibatillah.site</div>
				</div>
			</div>
		</div>,
		{ ...size, fonts },
	)
}
