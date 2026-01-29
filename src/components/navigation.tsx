"use client"

import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import { cn } from "@/lib/utils"
import { Kbd } from "./ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const menu = [
	{ label: "Overview", url: "/", shortcut: "1" },
	{ label: "Projects", url: "/projects", shortcut: "2" },
	{ label: "Explore", url: "/explore", shortcut: "3" },
]

export default function Navigation({ className }: { className?: string }) {
	const pathname = usePathname()
	const router = useRouter()

	const [hovered, setHovered] = useState<string | null>(null)

	useHotkeys(
		menu.map((item) => item.shortcut),
		(event) => {
			const index = Number(event.key) - 1
			const target = menu[index]

			if (target) router.push(target.url)
		},
		{ enableOnFormTags: false },
	)

	return (
		<nav
			onMouseLeave={() => setHovered(null)}
			className={cn("flex items-center pb-0.5", className)}
		>
			{menu.map((item, index) => {
				const isHovered = hovered === item.url
				const isActive =
					item.url === "/"
						? pathname === "/"
						: pathname === item.url || pathname.startsWith(`${item.url}/`)

				return (
					<Tooltip key={index} delay={500}>
						<TooltipTrigger
							onMouseEnter={() => setHovered(item.url)}
							render={
								<Link
									href={item.url}
									className={cn(
										"relative z-10 cursor-pointer px-3 py-1 font-sans focus-visible:rounded-sm focus-visible:bg-muted-foreground/5 focus-visible:outline-none dark:focus-visible:bg-muted-foreground/20",
										isActive ? "text-foreground" : "text-muted-foreground",
									)}
								>
									{item.label}
									<AnimatePresence>
										{isHovered && (
											<motion.div
												layoutId="nav-hover"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
												className="absolute inset-0 -z-10 rounded-sm bg-muted-foreground/5 dark:bg-muted-foreground/20"
											/>
										)}
									</AnimatePresence>
									{isActive && (
										<motion.div
											layoutId="nav-underline"
											transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
											className="absolute inset-x-0 -bottom-[3.5px] h-0.5 rounded-sm bg-primary"
										/>
									)}
								</Link>
							}
						/>
						<TooltipContent className="ps-2.5 pe-1.5">
							Go to {item.label} <Kbd>{item.shortcut}</Kbd>
						</TooltipContent>
					</Tooltip>
				)
			})}
		</nav>
	)
}
