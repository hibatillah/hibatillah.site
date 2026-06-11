import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ContentCategory } from "@/lib/types"

/** URL segment → content directory. Reached via the `*.md` rewrites in next.config.ts. */
const TYPE_TO_CATEGORY: Record<string, ContentCategory> = {
	project: "projects",
	work: "exp",
	edu: "edu",
}

/**
 * Serves the raw MDX source of a content page as `text/markdown` so agents can parse
 * frontmatter + prose directly, skipping the rendered HTML. ESM imports are stripped.
 */
export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ type: string; slug: string }> },
) {
	const { type, slug } = await params
	const category = TYPE_TO_CATEGORY[type]

	if (!category) {
		return new Response("Not found", { status: 404 })
	}

	let raw: string
	try {
		raw = await readFile(join(process.cwd(), "src/contents", category, `${slug}.mdx`), "utf-8")
	} catch {
		return new Response("Not found", { status: 404 })
	}

	const markdown = raw
		.replace(/^import .*$/gm, "")
		.replace(/\n{3,}/g, "\n\n")
		.trim()

	return new Response(markdown, {
		headers: {
			"content-type": "text/markdown; charset=utf-8",
			"cache-control": "public, max-age=3600, s-maxage=86400",
		},
	})
}
