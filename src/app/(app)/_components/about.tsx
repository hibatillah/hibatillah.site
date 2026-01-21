"use client"

import Socials from "@/components/socials"
import { Card, CardContent } from "@/components/ui/card"
import profile from "@/contents/profile.json"
import { staggerItem } from "@/lib/animations"
import * as generic from "@/static/generic"
import Image from "next/image"

export default function AboutSection() {
	return (
		<section>
			<Card variants={staggerItem} className="p-0 lg:h-52">
				<CardContent className="grid grid-cols-1 gap-0 p-0 md:grid-cols-[calc(var(--spacing)*60)_1fr]">
					<div className="aspect-2/1 md:aspect-square">
						<Image
							src={generic.about}
							alt=""
							width={1000}
							height={1000}
							placeholder="blur"
							className="pointer-events-none size-full object-cover select-none dark:brightness-90"
						/>
					</div>
					<div className="flex flex-col gap-2 px-6 py-5">
						<h1 className="text-lg font-medium">{profile.name}</h1>
						<p className="text-sm/relaxed">{profile.about}</p>
						<div className="mt-2 flex items-center justify-between gap-4">
							<Socials />
							<span className="text-sm text-muted-foreground">{profile.location}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
