import { MetadataRoute } from "next"
import profile from "@/contents/profile.json"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${profile.url}/sitemap.xml`,
	}
}
