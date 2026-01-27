import profile from "@/contents/profile.json"
import { ASSETS_BASE_URL } from "@/lib/constants"
import { getContentByCategory, getContentData } from "@/lib/contents"
import { getRemoteImages } from "@/lib/remote-image"
import { Education, Experience, Project } from "@/lib/types"
import { customSort } from "@/lib/utils"
import { all } from "better-all"
import { Metadata } from "next"
import Overview from "./_components/overview"

export const metadata: Metadata = {
	title: "Overview",
	description: profile.description,
	openGraph: {
		title: "Overview",
		description: profile.description,
		siteName: profile.title,
		url: profile.url,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Overview",
		description: profile.description,
		creator: profile.links.x,
	},
}

export default async function Page() {
	const { experience, education, featured, images } = await all({
		async experience() {
			const { data } = await getContentData<Experience>("experiences", profile.featured.experience)
			return data
		},
		async education() {
			const { data } = await getContentData<Education>("educations", profile.featured.education)
			return data
		},
		async projects() {
			return getContentByCategory<Project>("projects")
		},
		async featured() {
			const projects = await this.$.projects

			return projects
				.filter((item) => profile.featured.projects.includes(item.slug))
				.sort((a, b) => customSort(a.slug, b.slug, profile.featured.projects))
		},
		async images() {
			return getRemoteImages([
				{ key: "about", src: `${ASSETS_BASE_URL}/about-bg.webp` },
				{ key: "featured", src: `${ASSETS_BASE_URL}/featured-bg.webp` },
			])
		},
	})

	return <Overview data={{ experience, education, projects: featured }} images={images} />
}
