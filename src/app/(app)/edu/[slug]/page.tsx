import { Header } from "@/components/header"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import profile from "@/contents/profile.json"
import { getContentData } from "@/lib/contents"
import { Education } from "@/lib/types"
import { Metadata } from "next"

export async function generateMetadata({ params }: PageProps<"/edu/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const { data } = await getContentData<Education>("edu", slug)

	return {
		title: data.degree,
		description: data.description,
		alternates: {
			canonical: `/edu/${slug}`,
			types: { "text/markdown": `/edu/${slug}.md` },
		},
		openGraph: {
			title: data.degree,
			description: data.description,
			siteName: profile.title,
			url: `/edu/${slug}`,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: data.degree,
			description: data.description,
			creator: profile.twitterHandle,
		},
	}
}

export default async function Page({ params }: PageProps<"/edu/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Education>("edu", slug)

	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", path: "/" },
					{ name: data.degree, path: `/edu/${slug}` },
				]}
			/>
			<Header heading={data.degree} description={data.college} meta={[data.period, data.score]} />
			<Content />
		</>
	)
}
