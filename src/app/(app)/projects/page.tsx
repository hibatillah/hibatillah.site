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
		<div className="grid grid-cols-1 gap-4 max-lg:px-4 md:grid-cols-2">
			{projects.map((project, index) => (
				<ProjectCard key={index} data={project} />
			))}
		</div>
	)
}
