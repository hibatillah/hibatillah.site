import profile from "@/contents/profile.json"

/**
 * Structured data (`Person` + `WebSite` + `ProfilePage`) declaring hibatillah.site
 * as the canonical entity for the name, with `sameAs` linking the social profiles.
 * Rendered once in the root layout.
 */
export function JsonLd() {
	const personId = `${profile.url}/#person`
	const websiteId = `${profile.url}/#website`

	const graph = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": personId,
				name: profile.name,
				url: profile.url,
				image: `${profile.url}/opengraph-image`,
				jobTitle: "Fullstack Web Developer",
				description: profile.about,
				email: profile.links.email.replace("mailto:", ""),
				address: {
					"@type": "PostalAddress",
					addressLocality: "Riau",
					addressCountry: "ID",
				},
				worksFor: {
					"@type": "Organization",
					name: "Onesia",
				},
				knowsAbout: [
					"TypeScript",
					"React",
					"Next.js",
					"Node.js",
					"Hono",
					"Elysia",
					"Laravel",
					"Web Development",
				],
				sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: profile.url,
				name: profile.title,
				inLanguage: "en",
				publisher: { "@id": personId },
			},
			{
				"@type": "ProfilePage",
				url: profile.url,
				mainEntity: { "@id": personId },
				isPartOf: { "@id": websiteId },
			},
		],
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	)
}

/**
 * `BreadcrumbList` structured data for a detail page. Paths are resolved against
 * `profile.url`. There is no category listing page, so detail pages use a flat
 * `Home › <title>` trail (never link a non-existent `/projects` etc.).
 */
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
	const graph = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${profile.url}${item.path}`,
		})),
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	)
}
