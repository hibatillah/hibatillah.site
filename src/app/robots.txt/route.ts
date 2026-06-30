import profile from "@/contents/profile.json"

const aiCrawlers = [
	"GPTBot",
	"OAI-SearchBot",
	"ChatGPT-User",
	"ClaudeBot",
	"Claude-User",
	"Claude-SearchBot",
	"PerplexityBot",
	"Perplexity-User",
	"Google-Extended",
	"CCBot",
]

/**
 * Content Signals (contentsignals.org) — declare AI-usage preferences:
 * `search` indexing is allowed; `ai-input` (answer-engine retrieval) and
 * `ai-train` (model training) are opted out.
 */
const contentSignal = "search=yes, ai-input=no, ai-train=no"

/**
 * Hand-built `/robots.txt`. Replaces the `robots.ts` metadata file because the
 * `MetadataRoute.Robots` type cannot emit the non-standard `Content-Signal:` line.
 */
export function GET() {
	const lines = [
		"User-agent: *",
		`Content-Signal: ${contentSignal}`,
		"Allow: /",
		"",
		...aiCrawlers.flatMap((ua) => [`User-agent: ${ua}`, "Allow: /", ""]),
		`Host: ${profile.url}`,
		`Sitemap: ${profile.url}/sitemap.xml`,
		"",
	]

	return new Response(lines.join("\n"), {
		headers: {
			"content-type": "text/plain; charset=utf-8",
			"cache-control": "public, max-age=3600, s-maxage=86400",
		},
	})
}
