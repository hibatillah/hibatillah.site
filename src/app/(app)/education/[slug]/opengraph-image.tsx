import { getContentByCategory, getContentData } from "@/lib/contents"
import { Education } from "@/lib/types"
import { getFonts } from "@/lib/utils"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const dynamicParams = false
export const size = {
	width: 1200,
	height: 630,
}
export const alt = "Education | Hibatillah Hasanin"
export const contentType = "image/png"

export async function generateStaticParams() {
	const educations = await getContentByCategory<Education>("educations")
	return educations.map((item) => ({ slug: item.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const { data } = await getContentData<Education>("educations", slug)
	const fonts = await getFonts()

	return new ImageResponse(
		<div tw="relative flex h-full w-full flex-col overflow-hidden bg-black px-12 py-20 text-white">
			<div tw="flex h-full flex-col justify-between">
				<div tw="flex flex-col">
					<h1 tw="text-5xl leading-normal font-bold tracking-tight text-white">{data.degree}</h1>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">{data.college}</p>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						{data.location} • {data.range} • {data.score}
					</p>
				</div>

				<div tw="flex flex-row justify-between">
					<div tw="text-2xl font-semibold">Education | Hibatillah Hasanin</div>
					<div tw="text-2xl font-semibold">hibatillah.site</div>
				</div>
			</div>
		</div>,
		{ ...size, fonts },
	)
}
