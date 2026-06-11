import { MetadataRoute } from "next"
import profile from "@/contents/profile.json"

/**
 * Answer-engine and agent crawlers we explicitly welcome
 */
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

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: aiCrawlers, allow: "/" },
		],
		sitemap: `${profile.url}/sitemap.xml`,
		host: profile.url,
	}
}
