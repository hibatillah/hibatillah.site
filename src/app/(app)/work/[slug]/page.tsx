import { Header } from "@/components/header"
import { getContentData } from "@/lib/contents"
import { Experience } from "@/lib/types"

export default async function Page({ params }: PageProps<"/work/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Experience>("experiences", slug)

	return (
		<>
			<Header heading={data.title} description={data.company} />
			<Content />
		</>
	)
}
