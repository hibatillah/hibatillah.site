import profile from "@/contents/profile.json"
import { getContentByCategory } from "@/lib/contents"
import { Component } from "@/lib/types"
import { customSort } from "@/lib/utils"
import { Metadata } from "next"
import { ComponentCard } from "./_components/card"

const title = "Explore"
const description = "A curated collection of UI components and blocks built for this portfolio."

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		siteName: profile.title,
		url: "/explore",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		creator: profile.twitterHandle,
	},
}

const order = ["responsive-dialog", "description-list", "data-table-filter"]

export default async function Page() {
	const components = await getContentByCategory<Component>("components")
	const ordered = components.sort((a, b) => customSort(a.slug, b.slug, order))

	return (
		<div className="grid grid-cols-1 gap-3 max-lg:px-4 md:grid-cols-2">
			{ordered.map((component) => (
				<ComponentCard key={component.slug} data={component} />
			))}
		</div>
	)
}
