import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { getCategoriesData, getContentData } from "@/lib/mdx"
import { Project } from "@/lib/types"
import { Metadata } from "next"
import ProjectLinks from "./links"

export const dynamicParams = false

export async function generateStaticParams() {
	const projects = await getCategoriesData<Project>("projects")
	return projects.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
	params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Project>("projects", slug)

	return {
		title: data.title,
		description: data.headline,
	}
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Project>("projects", slug)

	return (
		<>
			<Card className="max-lg:mx-4">
				<CardContent className="flex flex-col gap-1">
					<CardTitle>
						<h1 className="inline text-lg/snug font-medium text-pretty">{data.title}</h1>
					</CardTitle>

					<div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0.5 text-base/snug text-muted-foreground">
						<span>{data.roles.join(", ")}</span>
						<span aria-hidden="true" className="max-md:hidden">
							•
						</span>
						<span>{data.range}</span>
					</div>

					<div className="flex flex-col items-end justify-between gap-1 md:flex-row md:gap-10">
						<div className="flex flex-wrap items-center gap-1.5">
							{data.stacks.map((item) => (
								<Badge key={item} variant="secondary">
									{item}
								</Badge>
							))}
						</div>
						<ProjectLinks data={data} className="md:justify-end md:self-end" />
					</div>
				</CardContent>
			</Card>

			<Content />
		</>
	)
}
