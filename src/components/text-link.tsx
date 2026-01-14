import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
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
	 * remove the underline
	 * @default false
	 */
	noUnderline?: boolean
}

export function TextLink({
	href,
	external = false,
	className,
	children,
	noUnderline = false,
	...props
}: TextLinkProps) {
	const externalConfig = {
		target: "_blank",
		rel: "noopener noreferrer",
	}

	return (
		<Link
			href={href}
			data-underline={!noUnderline}
			className={cn(
				"group relative isolate inline w-fit text-current hover:text-foreground/90 focus-visible:text-foreground/90 focus-visible:outline-none focus-visible:before:absolute focus-visible:before:-inset-x-1 focus-visible:before:-top-0.5 focus-visible:before:-z-10 focus-visible:before:rounded-sm focus-visible:before:bg-muted focus-visible:before:ring-1 focus-visible:before:ring-ring/50 focus-visible:data-[underline=false]:before:-bottom-0.5 focus-visible:data-[underline=true]:before:-bottom-1",
				className,
			)}
			{...(external ? externalConfig : {})}
			{...props}
		>
			<span className="z-10">{children}</span>
			{external && <ArrowUpRightIcon className="mb-1.5 inline size-3 stroke-2" />}
			<span className="absolute inset-x-0 bottom-0 h-[0.5px] w-full bg-current duration-200 group-data-[underline=false]:opacity-0 group-data-[underline=false]:group-hover:opacity-100 motion-safe:transition-opacity" />
		</Link>
	)
}
