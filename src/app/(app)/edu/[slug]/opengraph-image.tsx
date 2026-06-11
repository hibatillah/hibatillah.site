import { getContentData } from "@/lib/contents"
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og"
import { Education } from "@/lib/types"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: PageProps<"/edu/[slug]">) {
	const { slug } = await params
	const { data } = await getContentData<Education>("edu", slug)

	return renderOgImage({
		eyebrow: "EDUCATION — HIBATILLAH HASANIN",
		title: data.degree,
		description: data.description,
	})
}
