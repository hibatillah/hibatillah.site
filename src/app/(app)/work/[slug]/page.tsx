import { Header } from "@/components/header"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import profile from "@/contents/profile.json"
import { getContentData } from "@/lib/contents"
import { Experience } from "@/lib/types"
import { Metadata } from "next"

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Experience>("exp", slug)

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `/work/${slug}`,
			types: { "text/markdown": `/work/${slug}.md` },
		},
		openGraph: {
			title: data.title,
			description: data.description,
			siteName: profile.title,
			url: `/work/${slug}`,
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

export default async function Page({ params }: PageProps<"/work/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Experience>("exp", slug)

	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", path: "/" },
					{ name: data.title, path: `/work/${slug}` },
				]}
			/>
			<Header heading={data.title} description={data.company} meta={[data.period]} />
			<Content />
		</>
	)
}
