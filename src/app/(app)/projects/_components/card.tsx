"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { Project, ProjectVariant } from "@/lib/types"
import { cn } from "@/lib/utils"
import * as generic from "@/static/generic"
import * as thumbnails from "@/static/projects/thumbnails"
import {
	ArrowUpRightIcon,
	BookOpenIcon,
	GitPullRequestIcon,
	GlobeIcon,
	type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
	data: Project
	featured?: boolean
	variant?: ProjectVariant
}

interface ProjectAction {
	href: string
	label: string
	Icon: LucideIcon
}

export function ProjectCard({ data, featured = false, variant }: ProjectCardProps) {
	const isMobile = useIsMobile()

	const visibleCount = isMobile || !featured ? 2 : 3
	const stacks = {
		visible: data.stacks.slice(0, visibleCount),
		hidden: data.stacks.slice(visibleCount),
	}

	const actions = [
		{ href: data.docs, label: "Documentation", Icon: BookOpenIcon },
		{ href: data.repo, label: "Repository", Icon: GitPullRequestIcon },
		{ href: data.live, label: "Live", Icon: GlobeIcon },
	].filter((item) => Boolean(item.href)) as ProjectAction[]

	return (
		<Card
			role="button"
			className={cn(
				"group/card relative active:scale-99 has-[a[data-label='project']:focus-visible]:ring-4 has-[a[data-label='project']:focus-visible]:ring-ring/50 motion-safe:transition-transform",
				{
					"pt-0": featured,
				},
			)}
		>
			<div
				className={cn("relative aspect-2/1 w-full overflow-hidden rounded-t-lg", {
					hidden: !featured,
				})}
			>
				<Image
					src={generic.projects}
					alt=""
					width={1200}
					height={1200}
					placeholder="blur"
					className="pointer-events-none size-full object-cover object-top brightness-110 select-none dark:brightness-90"
					priority
				/>
				<motion.div
					key={data.title}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className={cn(
						"absolute start-11 top-11 w-95/100 origin-top-left overflow-hidden rounded-tl-lg shadow-2xl duration-200 ease-out motion-safe:transition-all md:group-hover/card:top-9",
						{
							"start-0 top-5 w-full rounded-t-lg md:group-hover/card:top-4": variant === "mobile",
						},
					)}
				>
					<Image
						src={thumbnails[data.thumbnail as keyof typeof thumbnails]}
						alt={data.title}
						width={1800}
						height={1800}
						placeholder="blur"
						className="size-full object-top dark:brightness-90"
						priority
					/>
				</motion.div>
			</div>

			<CardContent
				className={cn("flex grow flex-col", {
					"md:grid md:grid-cols-[60%_1fr] md:gap-4 md:pe-5": !featured,
				})}
			>
				<div
					className={cn("space-y-px", {
						"mb-2": featured,
						"max-md:mb-2": !featured,
					})}
				>
					<CardTitle>
						<h3 className="inline text-base/snug text-pretty!">{data.title}</h3>
					</CardTitle>

					<CardDescription className="line-clamp-2 text-pretty">{data.headline}</CardDescription>
				</div>

				<div
					className={cn("flex flex-row justify-between gap-2", {
						"md:mt-auto md:items-end": featured,
						"md:items-center": !featured,
					})}
				>
					<div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0.5 max-md:items-end">
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
						{actions.map(({ href, label, Icon }) => (
							<Tooltip key={label}>
								<TooltipTrigger
									render={
										<Button
											size={isMobile ? "icon-lg" : "icon"}
											variant="outline"
											aria-label={label}
											render={<Link href={href} target="_blank" rel="noopener noreferrer" />}
											nativeButton={false}
											onClick={(event) => event.stopPropagation()}
										>
											<Icon />
										</Button>
									}
								/>
								<TooltipContent className="flex flex-row items-center gap-0.5 pe-2">
									{label}
									<ArrowUpRightIcon className="size-3 text-background" />
								</TooltipContent>
							</Tooltip>
						))}
					</div>
				</div>
			</CardContent>

			<Link
				data-label="project"
				href={`/projects/${data.slug}`}
				className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none"
				aria-label="View project"
			/>
		</Card>
	)
}
