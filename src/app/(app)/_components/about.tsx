"use client"

import Socials from "@/components/socials"
import { Card, CardContent } from "@/components/ui/card"
import profile from "@/contents/profile.json"
import { staggerItem } from "@/lib/animations"
import { RemoteImage } from "@/lib/remote-image"
import Image from "next/image"

export default function AboutSection({ image }: { image: RemoteImage }) {
	return (
		<section>
			<Card variants={staggerItem} className="p-0">
				<CardContent className="grid grid-cols-1 gap-0 p-0 md:grid-cols-[calc(var(--spacing)*48)_1fr]">
					<div className="relative h-full w-auto max-md:hidden">
						<Image
							src={image.src}
							alt=""
							width={image.width}
							height={image.height}
							placeholder={image.blurData ? "blur" : "empty"}
							blurDataURL={image.blurData}
							className="pointer-events-none size-full object-cover object-center select-none dark:brightness-90"
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
