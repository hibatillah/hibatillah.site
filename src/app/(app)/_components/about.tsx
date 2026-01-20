"use client"

import Socials from "@/components/socials"
import { Card, CardContent } from "@/components/ui/card"
import { staggerItem } from "@/lib/animations"
import Image from "next/image"
import profile from "@/contents/profile.json"

export default function AboutSection() {
	return (
		<section>
			<Card variants={staggerItem} className="p-0 lg:h-52">
				<CardContent className="grid grid-cols-1 gap-0 p-0 md:grid-cols-[calc(var(--spacing)*60)_1fr]">
					<div className="aspect-2/1 md:aspect-square">
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
						<h1 className="text-lg font-medium">{profile.name}</h1>
						<p className="text-sm/relaxed">{profile.about}</p>
						<Socials className="mt-1" />
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
