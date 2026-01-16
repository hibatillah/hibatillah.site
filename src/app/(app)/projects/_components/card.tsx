"use client"

import { ImageTheme } from "@/components/image-theme"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { Project } from "@/lib/types"
import { getSafeSrc } from "@/lib/utils"
import { ArrowUpRightIcon, BookOpenIcon, GitPullRequestIcon, GlobeIcon } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ data }: { data: Project }) {
	const isMobile = useIsMobile()
	const VISIBLE_STACKS_COUNT = 2

	const stacks = {
		visible: data.stacks.slice(0, VISIBLE_STACKS_COUNT),
		hidden: data.stacks.slice(VISIBLE_STACKS_COUNT),
	}

	return (
		<Card>
			<div className="relative h-52 w-full overflow-hidden">
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
					className="absolute start-10 top-10 w-95/100 origin-top-left overflow-hidden rounded-tl-lg shadow-2xl"
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
			<CardContent className="flex flex-col gap-1">
				<CardTitle className="flex flex-col gap-px">
					<h3 className="inline text-base/snug text-pretty">{data.title}</h3>
				</CardTitle>
				<div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm/snug text-muted-foreground">
					<span>{data.roles.join(", ")}</span>
					<span aria-hidden="true" className="max-md:hidden">
						•
					</span>
					<span>
						{data.stacks.length > VISIBLE_STACKS_COUNT
							? `${stacks.visible.join(", ")}, +${stacks.hidden.length}`
							: stacks.visible.join(", ")}
					</span>
				</div>
				<div className="mt-2 flex flex-row flex-wrap items-end justify-end gap-3 md:mt-1 md:gap-2">
					<Button
						variant="link"
						className="me-auto -translate-x-2.5 font-mono! text-xs tracking-wide text-muted-foreground uppercase md:translate-y-2"
						render={<Link href={`/projects/${data.slug}`} />}
						nativeButton={false}
					>
						Details
					</Button>
					{data.docs && (
						<Tooltip disabled={isMobile}>
							<TooltipTrigger
								render={
									<Button
										size={isMobile ? "lg" : "icon"}
										variant="outline"
										aria-label="Documentation"
										render={<Link href={data.docs} target="_blank" rel="noopener noreferrer" />}
										nativeButton={false}
									>
										<BookOpenIcon />
										<span className="md:sr-only">Docs</span>
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
						<Tooltip disabled={isMobile}>
							<TooltipTrigger
								render={
									<Button
										size={isMobile ? "lg" : "icon"}
										variant="outline"
										aria-label="Repository"
										render={<Link href={data.repo} target="_blank" rel="noopener noreferrer" />}
										nativeButton={false}
									>
										<GitPullRequestIcon />
										<span className="md:sr-only">Repository</span>
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
						<Tooltip disabled={isMobile}>
							<TooltipTrigger
								render={
									<Button
										size={isMobile ? "lg" : "icon"}
										variant="outline"
										aria-label="Live"
										render={<Link href={data.live} target="_blank" rel="noopener noreferrer" />}
										nativeButton={false}
									>
										<GlobeIcon />
										<span className="md:sr-only">Live</span>
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
			</CardContent>
		</Card>
	)
}
