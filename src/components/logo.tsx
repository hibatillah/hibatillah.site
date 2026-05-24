"use client"

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils"
import { useTheme } from "@ecosy/next-themes"
import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useHotkeys } from "react-hotkeys-hook"
import pfp from "../app/icon.png"
import { Kbd } from "./ui/kbd"

interface Social {
	label: string
	url: string
}

const socials: Social[] = [
	{ label: "X/Twitter", url: "https://x.com/hibatillahhabib" },
	{ label: "GitHub", url: "https://github.com/hibatillah" },
	{ label: "LinkedIn", url: "https://linkedin.com/in/hibatillahhabib" },
]

export function Logo({ className }: { className?: string }) {
	const { theme = "light", setTheme } = useTheme()
	useHotkeys("d", () => setTheme(theme === "dark" ? "light" : "dark"), {
		enableOnFormTags: false,
	})

	return (
		<ContextMenu>
			<ContextMenuTrigger
				render={
					<Link
						href="/"
						className={cn(
							"size-8 overflow-hidden rounded-full focus-visible:ring-1 focus-visible:ring-muted-foreground focus-visible:outline-none",
							className,
						)}
					>
						<Image
							src={pfp}
							placeholder="blur"
							alt="Hibatillah's PFP"
							className="pointer-events-none object-cover select-none"
						/>
					</Link>
				}
			/>
			<ContextMenuContent align="end" side="bottom" alignOffset={({ anchor }) => -anchor.width}>
				{socials.map((item, key) => (
					<ContextMenuItem
						key={key}
						className="text-sm"
						render={<Link href={item.url} target="_blank" rel="noopener noreferrer" />}
					>
						{item.label} <ArrowUpRightIcon className="ml-auto" />
					</ContextMenuItem>
				))}
				<ContextMenuSeparator />
				<ContextMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					Toggle Theme <Kbd className="ml-auto">D</Kbd>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}
