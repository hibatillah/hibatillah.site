import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface TextLinkProps extends React.ComponentProps<typeof Link> {
	/**
	 * short configuration for external links, including:
	 * - target="_blank"
	 * - rel="noopener noreferrer"
	 * @default false
	 */
	external?: boolean
	/**
	 * Configure the underline behavior
	 * @default "always"
	 */
	underline?: "always" | "hover" | "none"
}

export function TextLink({
	href,
	external = false,
	underline = "always",
	className,
	...props
}: TextLinkProps) {
	const externalConfig = {
		target: "_blank",
		rel: "noopener noreferrer",
	}

	return (
		<Link
			href={href}
			data-underline={underline}
			className={cn(
				"group relative isolate inline w-fit text-current hover:text-foreground",
				"[&_svg]:ms-0.5 [&_svg]:inline [&_svg]:size-3 [&_svg]:stroke-2",
				"underline decoration-current underline-offset-4 data-[underline=hover]:decoration-transparent data-[underline=hover]:hover:decoration-current data-[underline=none]:no-underline",
				"focus-visible:text-foreground/90 focus-visible:outline-none focus-visible:before:absolute focus-visible:before:-inset-x-1 focus-visible:before:-top-0.5 focus-visible:before:-z-10 focus-visible:before:rounded-sm focus-visible:before:bg-muted focus-visible:before:ring-1 focus-visible:before:ring-ring/50 focus-visible:not-data-[underline=always]:before:-bottom-0.5 focus-visible:data-[underline=always]:before:-bottom-1",
				className,
			)}
			{...(external ? externalConfig : {})}
			{...props}
		/>
	)
}
