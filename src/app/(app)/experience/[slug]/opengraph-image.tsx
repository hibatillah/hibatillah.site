import { getContentByCategory, getContentData } from "@/lib/contents"
import { Experience } from "@/lib/types"
import { getFonts } from "@/lib/utils"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const dynamicParams = false
export const size = {
	width: 1200,
	height: 630,
}
export const alt = "Experience | Hibatillah Hasanin"
export const contentType = "image/png"

export async function generateStaticParams() {
	const experiences = await getContentByCategory<Experience>("experiences")
	return experiences.map((item) => ({ slug: item.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const { data } = await getContentData<Experience>("experiences", slug)
	const fonts = await getFonts()

	return new ImageResponse(
		<div tw="relative flex h-full w-full flex-col overflow-hidden bg-black px-12 py-20 text-white">
			<div tw="flex h-full flex-col justify-between">
				<div tw="flex flex-col">
					<h1 tw="text-5xl leading-normal font-bold tracking-tight text-white">{data.title}</h1>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">{data.company}</p>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						{data.location} • {data.range}
					</p>
				</div>

				<div tw="flex flex-row justify-between">
					<div tw="text-2xl font-semibold">Experience | Hibatillah Hasanin</div>
					<div tw="text-2xl font-semibold">hibatillah.site</div>
				</div>
			</div>
		</div>,
		{ ...size, fonts },
	)
}
