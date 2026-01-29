import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import profile from "@/contents/profile.json"
import { SparklesIcon } from "lucide-react"
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
	return (
		<div className="max-md:px-4">
			<Empty className="min-h-[50vh] border bg-card">
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<SparklesIcon />
					</EmptyMedia>
					<EmptyTitle>Something exciting is coming</EmptyTitle>
					<EmptyDescription>
						A curated collection of stacks, tools, and insights is on the way. Stay tuned!
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		</div>
	)
}
