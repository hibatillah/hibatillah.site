import { Header } from "@/components/header"
import { getContentData } from "@/lib/contents"
import { Education } from "@/lib/types"

export default async function Page({ params }: PageProps<"/edu/[slug]">) {
	const { slug } = await params
	const { Content, data } = await getContentData<Education>("educations", slug)

	return (
		<>
			<Header heading={data.degree} description={data.college} />
			<Content />
		</>
	)
}
