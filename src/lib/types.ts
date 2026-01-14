export interface Experience {
	title: string
	company: string
	icon: string
	range: string
	slug: string
	description: string
}

export type ThumbnailSource = string | { light: string; dark: string }

export interface Project {
	title: string
	description: string
	thumbnail: ThumbnailSource
	range: string
	slug: string
	featured: boolean
}
