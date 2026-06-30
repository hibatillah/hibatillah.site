export type ContentCategory = "edu" | "exp" | "projects" | "components"

export interface RemoteImage {
	src: string
	width: number
	height: number
	blurData?: string
	error?: string
}

export interface ItemLink {
	label: string
	url: string
}

export interface Experience {
	title: string
	company: string
	icon: string
	/** Human-readable date span, e.g. "Feb - Jul 2024". */
	period: string
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
	/** Human-readable date span, e.g. "Oct 2024 - Jul 2025". */
	period: string
	slug: string
	stacks: string[]
	associates?: string[]
	links?: ItemLink[]
}

export interface Education {
	college: string
	degree: string
	/** Human-readable date span, e.g. "Sep 2021 - Aug 2025". */
	period: string
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
