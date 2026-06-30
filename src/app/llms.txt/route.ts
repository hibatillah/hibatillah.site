import profile from "@/contents/profile.json"
import { getContentByCategory } from "@/lib/contents"
import { Education, Experience, Project } from "@/lib/types"
import { all } from "better-all"

/**
 * `/llms.txt` — a curated, markdown map of the site for LLMs and agents.
 * @see https://llmstxt.org
 */
export async function GET(request: Request) {
	const { projects, experiences, educations } = await all({
		async projects() {
			return getContentByCategory<Project>("projects")
		},
		async experiences() {
			return getContentByCategory<Experience>("exp")
		},
		async educations() {
			return getContentByCategory<Education>("edu")
		},
	})

	const url = profile.url

	const sections = [
		`# ${profile.name}`,
		`> ${profile.description}`,
		profile.about,
		`Based in ${profile.location}.`,
		[
			"## Experience",
			...experiences.map(
				(e) => `- [${e.title} — ${e.company}](${url}/work/${e.slug}.md): ${e.description}`,
			),
		].join("\n"),
		[
			"## Projects",
			...projects.map((p) => `- [${p.title}](${url}/project/${p.slug}.md): ${p.headline}`),
		].join("\n"),
		[
			"## Education",
			...educations.map(
				(ed) => `- [${ed.degree} — ${ed.college}](${url}/edu/${ed.slug}.md): ${ed.description}`,
			),
		].join("\n"),
		[
			"## Links",
			`- LinkedIn: ${profile.links.linkedin}`,
			`- GitHub: ${profile.links.github}`,
			`- X: ${profile.links.x}`,
			`- Email: ${profile.links.email.replace("mailto:", "")}`,
		].join("\n"),
	]

	/**
	 * Agents that negotiate `Accept: text/markdown` get `text/markdown`.
	 * humans visiting /llms.txt get `text/plain` so the browser renders it inline instead of downloading.
	 */
	const wantsMarkdown = (request.headers.get("accept") ?? "").includes("text/markdown")

	return new Response(`${sections.join("\n\n")}\n`, {
		headers: {
			"content-type": wantsMarkdown ? "text/markdown; charset=utf-8" : "text/plain; charset=utf-8",
			"cache-control": "public, max-age=3600, s-maxage=86400",
			vary: "Accept",
		},
	})
}
