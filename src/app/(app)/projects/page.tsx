import { getCategoriesData } from "@/lib/mdx"
import { Project } from "@/lib/types"
import { Metadata } from "next"
import ProjectCard from "./_components/card"

export const metadata: Metadata = {
	title: "Projects",
	description: "Crafted with passion and dedication to deliver innovative solutions.",
}

export default async function Page() {
	const projects = await getCategoriesData<Project>("projects")

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{projects.map((project) => (
				<ProjectCard key={project.slug} data={project} />
			))}
		</div>
	)
}
