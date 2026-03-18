"use server"

import fs from "fs"
import path from "path"
import { ContentCategory, MDXContent } from "./types"

const regex = /\.mdx$/i

function getFiles(category: ContentCategory) {
	const pathToFiles = path.join(process.cwd(), `src/contents/${category}`)
	return fs
		.readdirSync(pathToFiles)
		.filter((file) => regex.test(file))
		.map((file) => file.replace(regex, ""))
}

export async function getContentByCategory<T>(category: ContentCategory): Promise<T[]> {
	const files = getFiles(category)

	return Promise.all(
		files.map(async (filename) => {
			const { data } = await getContentData<T>(category, filename)
			return data
		}),
	)
}

export async function getContentData<T>(
	category: ContentCategory,
	slug: string,
): Promise<MDXContent<T>> {
	try {
		const { default: Content, frontmatter: data } = await import(
			`@/contents/${category}/${slug}.mdx`
		)
		return { Content, data: data as T }
	} catch {
		throw new Error(`Content not found: ${category}/${slug}`)
	}
}
