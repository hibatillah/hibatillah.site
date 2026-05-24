import { Header } from "@/components/header"
import { EduSection, ProjectSection, WorkSection } from "./_components/sections"

export default function Page() {
	return (
		<>
			<Header heading="M. Hibatillah Hasanin" description="Fullstack Web Developer" />

			<section>
				<h2>Brief</h2>

				<article>
					<p>
						Developer based on Indonesia, focused on the TypeScript ecosystem such as React,
						Next.js, Hono, and Elysia. I work with Laravel and Python professionally too, and spend
						part of my time on side projects and building things I find interesting.
					</p>
					<p>Currently Programmer AI at Onesia.</p>
				</article>
			</section>

			<WorkSection />
			<EduSection />
			<ProjectSection />
		</>
	)
}
