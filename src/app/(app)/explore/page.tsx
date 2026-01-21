import profile from "@/contents/profile.json"
import { Metadata } from "next"

const title = "Explore"
const description = "Explore various interesting stacks"

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		siteName: profile.title,
		url: "/explore",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		creator: profile.links.x,
	},
}

export default function Page() {
	return <div>What to explore?</div>
}
