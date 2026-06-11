import { RemoteImage } from "./remote-image"

export type ContentCategory = "edu" | "exp" | "projects" | "components"

export interface ItemLink {
	label: string
	url: string
}

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

export interface Project {
	title: string
	description: string
	headline: string
	roles: string[]
	thumbnail?: RemoteImage
	range: string
	slug: string
	stacks: string[]
	associates?: string[]
	links?: ItemLink[]
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

export interface Component {
	title: string
	description: string
	type: "registry:ui" | "registry:component" | "registry:block"
	slug: string
	registryDependencies?: string[]
	dependencies?: string[]
	credit?: string
	creditUrl?: string
}

export interface MDXContent<T> {
	Content: React.ComponentType
	data: T
}
