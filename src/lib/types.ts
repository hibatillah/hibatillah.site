export type ContentCategory = "educations" | "experiences" | "projects"

export interface Experience {
	title: string
	company: string
	icon: string
	range: string
	slug: string
	description: string
	featured: boolean

	/**
	 * Url to related contents. Could be internal or external links.
	 * */
	related?: string[]
}

export type ThumbnailSource = string | { light: string; dark: string }

export interface Project {
	title: string
	description: string
	headline: string
	roles: string[]
	thumbnail: ThumbnailSource
	range: string
	slug: string
	featured: boolean
	stacks: string[]
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
	featured: boolean
	/**
	 * Url to related contents. Could be internal or external links.
	 * */
	related?: string[]
}

export interface MDXContent<T> {
	Content: React.ComponentType
	data: T
}
