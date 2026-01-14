"use client"

import Socials from "@/components/socials"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutSection() {
	return (
		<section>
			<h2 className="font-mono! text-xs tracking-widest text-muted-foreground uppercase">About</h2>

			<Card className="p-0 lg:h-52">
				<CardContent className="grid grid-cols-1 gap-0 p-0 md:grid-cols-[auto_1fr]">
					<div className="h-40 w-full lg:h-full lg:w-72">
						<Image
							src="/images/about-background.webp"
							alt=""
							width={1000}
							height={1000}
							placeholder="blur"
							blurDataURL="/images/about-background.webp"
							className="pointer-events-none size-full object-cover select-none dark:brightness-90"
						/>
					</div>
					<div className="flex flex-col gap-2 px-6 py-5">
						<h1 className="text-lg font-medium">M. Hibatillah Hasanin</h1>
						<p className="text-sm/relaxed">
							Fullstack Web Developer focused on TypeScript, React, and modern backend tools like
							Hono and Elysia. I prioritize user-centric design and type-safe architecture to build
							scalable, high-performance applications. Currently, I am expanding my engineering
							scope by exploring Vue for frontend and Go for backend systems.
						</p>
						<Socials className="mt-1" />
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
