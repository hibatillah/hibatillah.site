import { Badge } from "@/components/ui/badge"
import profile from "@/contents/profile.json"
import { getContentByCategory, getContentData } from "@/lib/contents"
import { Component } from "@/lib/types"
import { ArrowUpRightIcon } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import { DataTableFilterDemo } from "../_components/demos/data-table-filter-demo"
import { DescriptionListDemo } from "../_components/demos/description-list-demo"
import { ResponsiveDialogDemo } from "../_components/demos/responsive-dialog-demo"

export const dynamicParams = false

export async function generateStaticParams() {
	const components = await getContentByCategory<Component>("components")
	return components.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
	params,
}: PageProps<"/prev/explore/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Component>("components", slug)
	const title = `${data.title} - Component`

	return {
		title,
		description: data.description,
		openGraph: {
			title,
			description: data.description,
			siteName: profile.title,
			url: `/explore/${slug}`,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: data.description,
			creator: profile.twitterHandle,
		},
	}
}

const demoMap: Record<string, ReactNode> = {
	"responsive-dialog": <ResponsiveDialogDemo />,
	"description-list": <DescriptionListDemo />,
	"data-table-filter": <DataTableFilterDemo />,
}

export default async function Page({ params }: PageProps<"/prev/explore/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Component>("components", slug)

	return (
		<>
			<div className="flex flex-col gap-1 max-lg:px-4">
				<div className="flex items-center gap-2">
					<h1 className="font-heading text-lg font-medium">{data.title}</h1>
					<Badge
						variant={data.type === "registry:block" ? "default" : "secondary"}
						className="capitalize"
					>
						{data.type.replace("registry:", "")}
					</Badge>
					{data.credit && data.creditUrl && (
						<Link
							href={data.creditUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
						>
							{data.credit}
							<ArrowUpRightIcon className="size-3 stroke-2" />
						</Link>
					)}
				</div>
				<p className="text-base text-muted-foreground">{data.description}</p>
			</div>

			<div className="flex min-h-40 items-center justify-center rounded-xl border bg-card p-6 max-lg:mx-4">
				{demoMap[slug]}
			</div>

			<Content />
		</>
	)
}
