import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	reactCompiler: true,
	redirects: () => [
		{
			source: "/links/email",
			destination: "mailto:hibatillahhabib@gmail.com",
			permanent: true,
		},
		{
			source: "/links/linkedin",
			destination: "https://linkedin.com/in/hibatillahhabib",
			permanent: true,
		},
		{
			source: "/links/github",
			destination: "https://github.com/hibatillah",
			permanent: true,
		},
		{
			source: "/links/x",
			destination: "https://x.com/hibatillahhabib",
			permanent: true,
		},
		{
			source: "/links/instagram",
			destination: "https://instagram.com/hibat.illah",
			permanent: true,
		},
	],
}

const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
		rehypePlugins: [],
	},
})

export default withMDX(nextConfig)
