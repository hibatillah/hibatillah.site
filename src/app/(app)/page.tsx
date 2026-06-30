import { Header } from "@/components/header"
import { TextLink } from "@/components/text-link"
import { EduSection, ProjectSection, WorkSection } from "./_components/sections"

export default function Page() {
	return (
		<>
			<Header heading="M. Hibatillah Hasanin" description="Fullstack Web Developer" />

			<section>
				<h2>Brief</h2>
				<article>
					<p>
						Dev based on Indonesia, focused on the TypeScript ecosystem such as React, Next.js,
						Hono, and Elysia. I work with Laravel and Python professionally too, and spend part of
						my time on side projects and building things I find interesting.
					</p>
					<p>Currently Programmer AI at Onesia.</p>
				</article>
			</section>

			<WorkSection />
			<EduSection />
			<ProjectSection />

			<section>
				<h2>More</h2>
				<article>
					<p>
						Connect on{" "}
						<TextLink href="https://linkedin.com/in/hibatillahhabib" underline="hover" external>
							LinkedIn
						</TextLink>
						, see my work on{" "}
						<TextLink href="https://github.com/hibatillah" underline="hover" external>
							GitHub
						</TextLink>
						, or get updates on{" "}
						<TextLink href="https://x.com/hibatillahhabib" underline="hover" external>
							X
						</TextLink>
						.
					</p>
				</article>
			</section>
		</>
	)
}
