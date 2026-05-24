import { getFonts } from "@/lib/utils"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = {
	width: 1200,
	height: 630,
}
export const alt = "Projects | Hibatillah Hasanin"
export const contentType = "image/png"

export default async function Image() {
	const fonts = await getFonts()
	const stacks = ["Next.js", "React", "TypeScript", "Laravel", "Flask", "Tailwind CSS"]

	return new ImageResponse(
		<div tw="relative flex h-full w-full flex-col overflow-hidden bg-black px-12 py-20 text-white">
			<div tw="flex h-full flex-col justify-between">
				<div tw="flex flex-col">
					<h1 tw="text-5xl leading-normal font-bold tracking-tight text-white">Projects</h1>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						Crafted with passion and dedication to deliver innovative solutions
					</p>

					<div tw="mt-2 flex flex-row">
						{stacks.map((item) => (
							<div key={item} tw="mr-1.5 rounded-full bg-neutral-800 px-3 py-1 text-lg">
								{item}
							</div>
						))}
						<div tw="rounded-full bg-neutral-800 py-1 pr-3 pl-2 text-lg">+16</div>
					</div>
				</div>

				<div tw="flex flex-row justify-between">
					<div tw="text-2xl font-semibold">Projects | Hibatillah Hasanin</div>
					<div tw="text-2xl font-semibold">hibatillah.site</div>
				</div>
			</div>
		</div>,
		{ ...size, fonts },
	)
}
