import profile from "@/contents/profile.json"
import { getContentByCategory } from "@/lib/contents"
import { Education, Experience, Project } from "@/lib/types"
import { all } from "better-all"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = profile.url

	const { projects, experiences, educations } = await all({
		async projects() {
			return getContentByCategory<Project>("projects")
		},
		async experiences() {
			return getContentByCategory<Experience>("experiences")
		},
		async educations() {
			return getContentByCategory<Education>("educations")
		},
	})

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/explore`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	]

	const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${baseUrl}/projects/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.8,
	}))

	const experiencePages: MetadataRoute.Sitemap = experiences.map((experience) => ({
		url: `${baseUrl}/experience/${experience.slug}`,
		lastModified: new Date(),
		changeFrequency: "yearly",
		priority: 0.7,
	}))

	const educationPages: MetadataRoute.Sitemap = educations.map((education) => ({
		url: `${baseUrl}/education/${education.slug}`,
		lastModified: new Date(),
		changeFrequency: "yearly",
		priority: 0.7,
	}))

	return [...staticPages, ...projectPages, ...experiencePages, ...educationPages]
}
