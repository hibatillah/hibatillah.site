import { getContentData } from "@/lib/contents"
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og"
import { Project } from "@/lib/types"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: PageProps<"/project/[slug]">) {
	const { slug } = await params
	const { data } = await getContentData<Project>("projects", slug)

	return renderOgImage({
		eyebrow: "PROJECT — HIBATILLAH HASANIN",
		title: data.title,
		description: data.description,
	})
}
