import { getContentByCategory, getContentData } from "@/lib/contents"
import { Project } from "@/lib/types"
import { getFonts, getProjectStacks } from "@/lib/utils"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const dynamicParams = false
export const size = {
	width: 1200,
	height: 630,
}
export const alt = "Project | Hibatillah Hasanin"
export const contentType = "image/png"

export async function generateStaticParams() {
	const projects = await getContentByCategory<Project>("projects")
	return projects.map((item) => ({ slug: item.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const { data } = await getContentData<Project>("projects", slug)
	const fonts = await getFonts()

	const visibleCount = 4
	const stacks = getProjectStacks(data.stacks, visibleCount)

	return new ImageResponse(
		<div tw="relative flex h-full w-full flex-col overflow-hidden bg-black px-12 py-20 text-white">
			<div tw="flex h-full flex-col justify-between">
				<div tw="flex flex-col">
					<h1 tw="text-5xl leading-normal font-bold tracking-tight text-white">{data.title}</h1>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">{data.headline}</p>
					<p tw="-mt-2 text-3xl leading-snug text-neutral-400">
						{data.roles.join(", ")} • {data.range}
					</p>

					<div tw="mt-2 flex flex-row">
						{data.stacks.length > visibleCount ? (
							<>
								{stacks.visible.map((item) => (
									<div tw="mr-1.5 rounded-full bg-neutral-800 px-3 py-1 text-lg">{item}</div>
								))}
								<div tw="rounded-full bg-neutral-800 py-1 pr-3 pl-2 text-lg">+6</div>
							</>
						) : (
							stacks.visible.map((item) => (
								<div tw="mr-1.5 rounded-full bg-neutral-800 px-3 py-1 text-lg">{item}</div>
							))
						)}
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
