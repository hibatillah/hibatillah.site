import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactCompiler: true,
	redirects: () => [
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

export default nextConfig
