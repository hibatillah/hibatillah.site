import projects from "@/contents/projects.json"
import { Project } from "@/lib/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"

function getProject(slug: string): Project {
	return projects.find((project) => project.slug === slug) as Project
}

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}))
}

export async function generateMetadata({
	params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) notFound()

	return {
		title: project.title,
		description: project.description,
	}
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) notFound()

	return (
		<div>
			<h1>{project.title}</h1>
		</div>
	)
}
