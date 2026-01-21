import { Separator } from "@/components/ui/separator"
import profile from "@/contents/profile.json"
import { getContentByCategory } from "@/lib/contents"
import { Project } from "@/lib/types"
import { customSort } from "@/lib/utils"
import { Metadata } from "next"
import { ProjectCard } from "./_components/card"

const title = "Projects"
const description = "Crafted with passion and dedication to deliver innovative solutions."

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		siteName: profile.title,
		url: "/projects",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		creator: profile.links.x,
	},
}

const list = {
	featured: [
		"furaya-hotel-management",
		"ministry-room-management",
		"yaman-music-classification",
		"indogrosir-scm",
	],
	others: ["massbeat", "ekolog-app", "rotte-scm", "rice-type-color"],
}

export default async function Page() {
	const projects = await getContentByCategory<Project>("projects")

	const featured = projects
		.filter((item) => list.featured.includes(item.slug))
		.sort((a, b) => customSort(a.slug, b.slug, list.featured))

	const others = projects
		.filter((item) => !list.featured.includes(item.slug))
		.sort((a, b) => customSort(a.slug, b.slug, list.others))

	return (
		<>
			<div className="grid grid-cols-1 gap-4 max-lg:px-4 md:grid-cols-2">
				{featured.map((project, index) => (
					<ProjectCard key={index} data={project} featured />
				))}
			</div>
			<div className="w-full max-lg:px-4">
				<Separator />
			</div>
			<div className="space-y-4 max-lg:px-4">
				{others.map((project, index) => (
					<ProjectCard key={index} data={project} />
				))}
			</div>
		</>
	)
}
