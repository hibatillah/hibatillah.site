import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { getCategoriesData, getContentData } from "@/lib/mdx"
import { Education } from "@/lib/types"
import { Metadata } from "next"
import Image from "next/image"

export const dynamicParams = false

export async function generateStaticParams() {
	const educations = await getCategoriesData<Education>("educations")
	return educations.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
	params,
}: PageProps<"/education/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Education>("educations", slug)

	return {
		title: data.degree,
		description: data.description,
	}
}

export default async function Page({ params }: PageProps<"/education/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Education>("educations", slug)

	return (
		<>
			<Card className="max-lg:mx-4">
				<CardHeader className="flex items-start justify-between gap-4 md:items-center">
					<div className="flex flex-col gap-px space-y-px">
						<CardTitle>
							<h1 className="inline text-lg/snug font-medium">{data.degree}</h1>
						</CardTitle>
						<div className="flex flex-col gap-x-1.5 gap-y-0.5 text-base/snug text-muted-foreground md:flex-row md:items-center">
							<span>{data.college}</span>
							<span aria-hidden="true" className="max-md:hidden">
								•
							</span>
							<span>{data.range}</span>
							<span aria-hidden="true" className="max-md:hidden">
								•
							</span>
							<span>{data.score}</span>
						</div>
					</div>
					<Image
						src={data.icon}
						alt={data.college}
						width={1000}
						height={1000}
						placeholder="blur"
						blurDataURL={data.icon}
						className="pointer-events-none size-10 max-w-20 object-contain max-md:mt-1.5"
					/>
				</CardHeader>
			</Card>

			<Content />
		</>
	)
}
