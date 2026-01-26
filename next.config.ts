import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import profile from "./src/contents/profile.json"

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.hibatillah.site",
				port: "",
				pathname: "/**",
			},
		],
	},
	redirects: () => {
		return Object.entries(profile.links).map(([label, url]) => ({
			source: `/links/${label}`,
			destination: url,
			permanent: true,
		}))
	},
}

const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter", "remark-gfm"],
		rehypePlugins: [],
	},
})

export default withMDX(nextConfig)
