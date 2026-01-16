"use server"

import fs from "fs"
import path from "path"
import { ContentCategory, MDXContent } from "./types"

function getFiles(category: ContentCategory) {
	const pathToFiles = path.join(process.cwd(), `src/contents/${category}`)
	return fs.readdirSync(pathToFiles).filter((file) => file.endsWith(".mdx"))
}

export async function getCategoriesData<T>(category: ContentCategory): Promise<T[]> {
	const files = getFiles(category)

	const contents = await Promise.all(
		files.map(async (filename) => {
			const { frontmatter } = await import(`@/contents/${category}/${filename}`)
			return frontmatter as T
		}),
	)

	return contents
}

export async function getContentData<T>(
	category: ContentCategory,
	slug: string,
): Promise<MDXContent<T>> {
	const { default: Content, frontmatter } = await import(`@/contents/${category}/${slug}.mdx`)
	return { Content, data: frontmatter }
}
