import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import profile from "./src/contents/profile.json"

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	reactCompiler: true,
	redirects: () => {
		return Object.entries(profile.links)
			.filter(([, url]) => !url.startsWith("mailto:"))
			.map(([label, url]) => ({
				source: `/links/${label}`,
				destination: url,
				permanent: true,
			}))
	},
	rewrites: async () => [
		{ source: "/project/:slug.md", destination: "/raw/project/:slug" },
		{ source: "/work/:slug.md", destination: "/raw/work/:slug" },
		{ source: "/edu/:slug.md", destination: "/raw/edu/:slug" },
	],
	// RFC 8288 Link headers — advertise machine-readable representations so agents
	// can discover them without parsing HTML. Home points at the llms.txt site map;
	// each detail page points at its `.md` alternate (mirrors the in-HTML
	// `<link rel="alternate" type="text/markdown">` from generateMetadata).
	headers: async () => [
		// Baseline security headers applied to every route.
		{
			source: "/(.*)",
			headers: [
				{
					key: "Strict-Transport-Security",
					value: "max-age=63072000; includeSubDomains; preload",
				},
				{ key: "X-Content-Type-Options", value: "nosniff" },
				{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
				{ key: "X-Frame-Options", value: "DENY" },
				{
					key: "Permissions-Policy",
					value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
				},
			],
		},
		{
			source: "/",
			headers: [{ key: "Link", value: '</llms.txt>; rel="describedby"; type="text/markdown"' }],
		},
		{
			source: "/project/:slug",
			headers: [
				{ key: "Link", value: '</project/:slug.md>; rel="alternate"; type="text/markdown"' },
			],
		},
		{
			source: "/work/:slug",
			headers: [{ key: "Link", value: '</work/:slug.md>; rel="alternate"; type="text/markdown"' }],
		},
		{
			source: "/edu/:slug",
			headers: [{ key: "Link", value: '</edu/:slug.md>; rel="alternate"; type="text/markdown"' }],
		},
	],
}

const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter", "remark-gfm"],
		rehypePlugins: [],
	},
})

export default withMDX(nextConfig)
