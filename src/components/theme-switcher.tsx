"use client"

import { cn } from "@/lib/utils"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Kbd } from "./ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const themes = [
	{ label: "system", icon: MonitorIcon, shortcut: "shift+a" },
	{ label: "light", icon: SunIcon, shortcut: "shift+s" },
	{ label: "dark", icon: MoonIcon, shortcut: "shift+d" },
]

export default function ThemeSwitcher({
	className,
	...props
}: React.ComponentProps<typeof ButtonGroup>) {
	const { theme = "system", setTheme } = useTheme()

	useHotkeys("shift+a", () => setTheme("system"), { enableOnFormTags: false })
	useHotkeys("shift+s", () => setTheme("light"), { enableOnFormTags: false })
	useHotkeys("shift+d", () => setTheme("dark"), { enableOnFormTags: false })

	return (
		<ButtonGroup
			className={cn(
				"*:data-[slot=button]: *:data-[slot=button]: overflow-hidden rounded-full border bg-card",
				className,
			)}
			{...props}
		>
			{themes.map((item) => (
				<Tooltip key={item.label} delay={500}>
					<TooltipTrigger
						render={
							<Button
								variant="ghost"
								size="icon-sm"
								aria-label={item.label}
								className={cn(
									"rounded-full! focus-visible:border focus-visible:text-foreground focus-visible:ring-0",
									item.label === theme
										? "bg-background text-foreground!"
										: "text-muted-foreground/50",
								)}
								onClick={() => setTheme(item.label)}
								suppressHydrationWarning
							>
								<item.icon />
							</Button>
						}
					/>
					<TooltipContent className="pe-2">
						Switch to {item.label} theme <Kbd>{item.shortcut}</Kbd>
					</TooltipContent>
				</Tooltip>
			))}
		</ButtonGroup>
	)
}
