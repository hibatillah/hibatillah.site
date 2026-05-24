"use client"

import { Badge } from "@/components/ui/badge"
import { fadeSlideUp } from "@/lib/animations"
import { Component } from "@/lib/types"
import { motion } from "motion/react"
import Link from "next/link"

interface ComponentCardProps {
	data: Component
}

export function ComponentCard({ data }: ComponentCardProps) {
	const isBlock = data.type === "registry:block"

	return (
		<motion.div
			{...fadeSlideUp}
			className="group/card relative overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 active:scale-99 has-[a[data-label='component']:focus-visible]:ring-4 has-[a[data-label='component']:focus-visible]:ring-ring/50 motion-safe:transition-transform"
		>
			<div className="flex aspect-3/2 flex-col">
				{/* Preview area */}
				<div className="relative flex-1 overflow-hidden border-b bg-muted/40">
					{/* Dot grid pattern */}
					<svg aria-hidden="true" className="absolute inset-0 size-full opacity-40 dark:opacity-20">
						<defs>
							<pattern
								id={`dots-${data.slug}`}
								x="0"
								y="0"
								width="16"
								height="16"
								patternUnits="userSpaceOnUse"
							>
								<circle cx="1" cy="1" r="1" fill="currentColor" className="text-muted-foreground" />
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill={`url(#dots-${data.slug})`} />
					</svg>

					{/* Decorative component name watermark */}
					<div className="absolute inset-0 flex items-center justify-center p-4">
						<span className="font-heading text-center text-3xl leading-tight font-bold text-muted-foreground/10 select-none sm:text-4xl">
							{data.title}
						</span>
					</div>

					{/* Type badge top-right */}
					<div className="absolute end-3 top-3">
						<Badge variant={isBlock ? "default" : "secondary"} className="text-[10px]">
							{data.type.replace("registry:", "")}
						</Badge>
					</div>
				</div>

				{/* Info footer */}
				<div className="flex flex-col gap-0.5 px-3 py-3">
					<h3 className="font-heading leading-snug font-medium">{data.title}</h3>
					<p className="line-clamp-1 text-sm text-muted-foreground">{data.description}</p>
				</div>
			</div>

			<Link
				data-label="component"
				href={`/explore/${data.slug}`}
				className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none"
				aria-label={`View ${data.title} component`}
			/>
		</motion.div>
	)
}
