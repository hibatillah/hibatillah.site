"use client"

import { ImageTheme } from "@/components/image-theme"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { Project } from "@/lib/types"
import { getSafeSrc } from "@/lib/utils"
import { ArrowUpRightIcon, BookOpenIcon, GitPullRequestIcon, GlobeIcon } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard({ data, featured = false }: { data: Project; featured?: boolean }) {
	const isMobile = useIsMobile()

	const visibleCount = isMobile || !featured ? 2 : 3
	const stacks = {
		visible: data.stacks.slice(0, visibleCount),
		hidden: data.stacks.slice(visibleCount),
	}

	return (
		<Card data-featured={featured} className="group/card relative data-[featured=true]:pt-0">
			<div className="relative aspect-2/1 w-full overflow-hidden rounded-t-lg in-data-[featured=false]:hidden">
				<Image
					src="/images/projects-background.webp"
					alt=""
					width={1200}
					height={1200}
					placeholder="blur"
					blurDataURL="/images/projects-background.webp"
					className="pointer-events-none size-full object-cover select-none dark:brightness-90"
					priority
				/>
				<motion.div
					key={data.title}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="absolute start-10 top-10 w-95/100 origin-top-left overflow-hidden rounded-tl-lg shadow-2xl duration-200 ease-out group-hover/card:top-9 motion-safe:transition-all"
				>
					<ImageTheme
						src={data.thumbnail}
						alt={data.title}
						width={1800}
						height={1800}
						placeholder="blur"
						blurDataURL={getSafeSrc(data.thumbnail)}
						className="size-full bg-top-left dark:brightness-90"
						priority
					/>
				</motion.div>
			</div>

			<CardContent className="flex grow flex-col md:in-data-[featured=false]:grid md:in-data-[featured=false]:grid-cols-[60%_1fr] md:in-data-[featured=false]:gap-4 md:in-data-[featured=false]:pe-5">
				<div className="space-y-px md:in-data-[featured=true]:mb-2">
					<CardTitle>
						<h3 className="inline text-base/snug text-pretty!">{data.title}</h3>
					</CardTitle>

					<CardDescription className="line-clamp-2 text-pretty">{data.headline}</CardDescription>
				</div>

				<div className="flex flex-row justify-between gap-2 md:md:in-data-[featured=false]:items-center md:in-data-[featured=true]:mt-auto md:in-data-[featured=true]:items-end">
					<div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0.5">
						{data.stacks.length > visibleCount ? (
							<>
								{stacks.visible.map((item) => (
									<Badge key={item} variant="secondary">
										{item}
									</Badge>
								))}
								<Badge variant="secondary">+{stacks.hidden.length}</Badge>
							</>
						) : (
							stacks.visible.map((item) => (
								<Badge key={item} variant="secondary">
									{item}
								</Badge>
							))
						)}
					</div>

					<div className="z-20 flex flex-row flex-wrap items-end justify-end gap-3 md:gap-2">
						{data.docs && (
							<Tooltip>
								<TooltipTrigger
									render={
										<Button
											size={isMobile ? "icon-lg" : "icon"}
											variant="outline"
											aria-label="Documentation"
											render={<Link href={data.docs} target="_blank" rel="noopener noreferrer" />}
											nativeButton={false}
											onClick={(e) => e.stopPropagation()}
										>
											<BookOpenIcon />
										</Button>
									}
								/>
								<TooltipContent className="flex flex-row items-center gap-0.5 pe-2">
									Documentation
									<ArrowUpRightIcon className="size-3 text-background" />
								</TooltipContent>
							</Tooltip>
						)}
						{data.repo && (
							<Tooltip>
								<TooltipTrigger
									render={
										<Button
											size={isMobile ? "icon-lg" : "icon"}
											variant="outline"
											aria-label="Repository"
											render={<Link href={data.repo} target="_blank" rel="noopener noreferrer" />}
											nativeButton={false}
											onClick={(e) => e.stopPropagation()}
										>
											<GitPullRequestIcon />
										</Button>
									}
								/>
								<TooltipContent className="flex flex-row items-center gap-0.5 pe-2">
									Repository
									<ArrowUpRightIcon className="size-3 text-background" />
								</TooltipContent>
							</Tooltip>
						)}
						{data.live && (
							<Tooltip>
								<TooltipTrigger
									render={
										<Button
											size={isMobile ? "icon-lg" : "icon"}
											variant="outline"
											aria-label="Live"
											render={<Link href={data.live} target="_blank" rel="noopener noreferrer" />}
											nativeButton={false}
											onClick={(e) => e.stopPropagation()}
										>
											<GlobeIcon />
										</Button>
									}
								/>
								<TooltipContent className="flex flex-row items-center gap-0.5 pe-2">
									Live
									<ArrowUpRightIcon className="size-3 text-background" />
								</TooltipContent>
							</Tooltip>
						)}
					</div>
				</div>
			</CardContent>

			<Link
				href={`/projects/${data.slug}`}
				className="absolute inset-0 z-10 rounded-lg"
				aria-label="View project"
			/>
		</Card>
	)
}
