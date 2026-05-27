"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@ecosy/next-themes"
import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useHotkeys } from "react-hotkeys-hook"
import pfp from "../app/icon.png"
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "./ui/context-menu"
import { Kbd } from "./ui/kbd"

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
				<ContextMenuItem
					render={
						<Link href="https://ledger.hibatillah.site" target="_blank" rel="noopener noreferrer" />
					}
				>
					Ledger <ArrowUpRightIcon className="ml-auto" />
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					Toggle Theme <Kbd className="ml-auto">D</Kbd>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}
