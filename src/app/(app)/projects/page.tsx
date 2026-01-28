import { Separator } from "@/components/ui/separator"
import profile from "@/contents/profile.json"
import { getContentByCategory } from "@/lib/contents"
import { getRemoteImage, getRemoteImages } from "@/lib/remote-image"
import { Project } from "@/lib/types"
import { customSort } from "@/lib/utils"
import { all } from "better-all"
import { Metadata } from "next"
import { ProjectCard } from "./_components/card"

export const dynamicParams = false

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

/* prettier-ignore */
const list = {
	featured: [
		"furaya-hotel-management",
		"ministry-room-management",
		"massbeat",
		"yaman-music-classification",
	],
	others: [
		"ekolog-app",
		"indogrosir-scm",
		"rotte-scm",
		"rice-type-color"
	],
}

export default async function Page() {
	const { background, projectsWithThumbnails } = await all({
		async background() {
			return getRemoteImage(`${profile.asssets}/projects-bg.webp`)
		},
		async projects() {
			return getContentByCategory<Project>("projects")
		},
		async thumbnails() {
			const projects = await this.$.projects

			return getRemoteImages(
				projects.map((project) => ({
					key: project.slug,
					src: `${profile.asssets}/projects/thumbnails/${project.slug}.webp`,
				})),
			)
		},
		async projectsWithThumbnails() {
			const projects = await this.$.projects
			const thumbnails = await this.$.thumbnails

			return projects.map((project) => ({
				...project,
				thumbnail: thumbnails[project.slug],
			}))
		},
	})

	const featured = projectsWithThumbnails
		.filter((item) => list.featured.includes(item.slug))
		.sort((a, b) => customSort(a.slug, b.slug, list.featured))

	const others = projectsWithThumbnails
		.filter((item) => !list.featured.includes(item.slug))
		.sort((a, b) => customSort(a.slug, b.slug, list.others))

	return (
		<>
			<div className="grid grid-cols-1 gap-4 max-lg:px-4 md:grid-cols-2">
				{featured.map((project, index) => (
					<ProjectCard
						key={index}
						data={project}
						variant={project.variant}
						bgImage={background}
						featured
					/>
				))}
			</div>
			<div className="w-full max-lg:px-4">
				<Separator />
			</div>
			<div className="space-y-3 max-lg:px-4">
				{others.map((project, index) => (
					<ProjectCard key={index} data={project} variant={project.variant} bgImage={background} />
				))}
			</div>
		</>
	)
}
