import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
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
		description: data.description,
	}
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Project>("projects", slug)

	return (
		<>
			<Card>
				<CardHeader className="grid grid-cols-1 gap-2 md:grid-cols-2">
					<div className="flex flex-col gap-1">
						<CardTitle>
							<h1 className="inline text-base/snug font-normal">{data.title}</h1>
						</CardTitle>
						<div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-0.5 text-sm/snug text-muted-foreground">
							<span>{data.roles.join(", ")}</span>
							<span aria-hidden="true" className="max-md:hidden">
								•
							</span>
							<span>{data.range}</span>
						</div>
					</div>

					<div className="flex w-full flex-col justify-start gap-2 place-self-end">
						<AvatarGroup className="md:justify-end">
							{Array.from({ length: data.stacks.length }).map((_, index) => (
								<Avatar key={index}>
									<AvatarImage src="" alt={data.title} />
									<AvatarFallback>MH</AvatarFallback>
								</Avatar>
							))}
						</AvatarGroup>
						<ProjectLinks data={data} className="mt-2 md:mt-1 md:justify-end" />
					</div>
				</CardHeader>
			</Card>

			<Content />
		</>
	)
}
