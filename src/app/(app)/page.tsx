import { getCategoriesData, getContentData } from "@/lib/mdx"
import { Education, Experience, Project } from "@/lib/types"
import HomeSection from "./_components/home"

export default async function Page() {
	const { data: experience } = await getContentData<Experience>("experiences", "ministry-finance")
	const { data: education } = await getContentData<Education>(
		"educations",
		"politeknik-caltex-riau",
	)

	const projects = await getCategoriesData<Project>("projects")
	const featured = projects.filter((item) => item.featured).reverse()

	return <HomeSection experience={experience} education={education} projects={featured} />
}
