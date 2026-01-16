"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import { GitHubIcon, LinkedInIcon, XTwitterIcon } from "./icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const links = [
	{ label: "GitHub", url: "/links/github", icon: GitHubIcon },
	{ label: "LinkedIn", url: "/links/linkedin", icon: LinkedInIcon },
	{ label: "X/Twitter", url: "/links/x", icon: XTwitterIcon },
]

export default function Socials({ className }: { className?: string }) {
	return (
		<nav className={cn("flex items-center gap-3 md:gap-2", className)}>
			{links.map((item, index) => (
				<Tooltip delay={100} key={index}>
					<TooltipTrigger
						aria-label={item.label}
						className="group text-sm font-normal focus-visible:outline-none"
						render={
							<Link
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors"
							/>
						}
					>
						<item.icon className="size-5 text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground md:size-4" />
					</TooltipTrigger>
					<TooltipContent className="flex flex-row items-center gap-0.5 pe-2">
						{item.label}
						<ArrowUpRightIcon className="size-3 text-background" />
					</TooltipContent>
				</Tooltip>
			))}
		</nav>
	)
}
