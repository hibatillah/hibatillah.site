import experiences from "@/contents/experience.json"
import { Experience } from "@/lib/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"

function getExperience(slug: string): Experience {
	return experiences.find((experience) => experience.slug === slug) as Experience
}

export function generateStaticParams() {
	return experiences.map((experience) => ({
		slug: experience.slug,
	}))
}

export async function generateMetadata({
	params,
}: PageProps<"/experience/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const experience = getExperience(slug)

	if (!experience) notFound()

	return {
		title: experience.title,
		description: experience.description,
	}
}

export default async function Page({ params }: PageProps<"/experience/[slug]">) {
	const { slug } = await params
	const experience = experiences.find((experience) => experience.slug === slug)

	if (!experience) notFound()

	return (
		<div>
			<h1>{experience.title}</h1>
		</div>
	)
}
