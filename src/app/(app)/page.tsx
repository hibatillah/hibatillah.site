import profile from "@/contents/profile.json"
import { getContentByCategory, getContentData } from "@/lib/contents"
import { Education, Experience, Project } from "@/lib/types"
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
	const { data: experience } = await getContentData<Experience>(
		"experiences",
		profile.featured.experience,
	)

	const { data: education } = await getContentData<Education>(
		"educations",
		profile.featured.education,
	)

	const projects = await getContentByCategory<Project>("projects")
	const featured = projects
		.filter((item) => profile.featured.projects.includes(item.slug))
		.reverse()

	return <Overview data={{ experience, education, projects: featured }} />
}
