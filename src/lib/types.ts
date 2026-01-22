import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type ContentCategory = "educations" | "experiences" | "projects"

export interface Experience {
	title: string
	company: string
	icon: string
	range: string
	slug: string
	description: string
	location: string

	/**
	 * Url to related contents. Could be internal or external links.
	 * */
	related?: Record<string, string>
}

export type ProjectVariant = "website" | "mobile" | "all"

export interface Project {
	title: string
	description: string
	headline: string
	roles: string[]
	thumbnail: string | StaticImport
	range: string
	slug: string
	stacks: string[]
	variant: ProjectVariant
	associates?: string[]
	repo?: string
	live?: string
	docs?: string
}

export interface Education {
	college: string
	degree: string
	range: string
	slug: string
	icon: string
	score: string
	description: string
	location: string
	/**
	 * Url to related contents. Could be internal or external links.
	 * */
	related?: Record<string, string>
}

export interface MDXContent<T> {
	Content: React.ComponentType
	data: T
}
