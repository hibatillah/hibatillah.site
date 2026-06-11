import profile from "@/contents/profile.json"
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = profile.title

export default async function Image() {
	return renderOgImage({
		eyebrow: "PORTFOLIO",
		title: profile.name,
		description: profile.description,
	})
}
