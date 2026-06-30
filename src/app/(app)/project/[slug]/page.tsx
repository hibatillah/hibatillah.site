import { Header } from "@/components/header"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import profile from "@/contents/profile.json"
import { getContentData } from "@/lib/contents"
import { Project } from "@/lib/types"
import { Metadata } from "next"

export async function generateMetadata({
	params,
}: PageProps<"/project/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Project>("projects", slug)

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `/project/${slug}`,
			types: { "text/markdown": `/project/${slug}.md` },
		},
		openGraph: {
			title: data.title,
			description: data.description,
			siteName: profile.title,
			url: `/project/${slug}`,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: data.title,
			description: data.description,
			creator: profile.twitterHandle,
		},
	}
}

export default async function Page({ params }: PageProps<"/project/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Project>("projects", slug)

	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", path: "/" },
					{ name: data.title, path: `/project/${slug}` },
				]}
			/>
			<Header
				heading={data.title}
				description={data.headline}
				stacks={data.stacks}
				links={data.links ?? []}
			/>
			<Content />
		</>
	)
}
