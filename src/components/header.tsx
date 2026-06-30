import { ItemLink } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"
import { StackLogos } from "./stack-logos"

interface HeaderProps extends React.ComponentProps<"header"> {
	heading: string
	description: string
	links?: ItemLink[]
	/** Tech stack, rendered as logos above the links nav. */
	stacks?: string[]
	/** Muted metadata (e.g. period, location, score), rendered dot-separated under the title. */
	meta?: (string | undefined)[]
}

export function Header({
	heading,
	description,
	links,
	stacks,
	meta,
	className,
	...props
}: HeaderProps) {
	const metaItems = meta?.filter(Boolean) ?? []
	const linksNav = links && (
		<nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
			{links.map((item, index) => (
				<Link
					key={index}
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center gap-0.5 text-sm"
				>
					{item.label}{" "}
					<ArrowUpRightIcon className="size-4 translate-y-px stroke-[1.5] text-primary" />
					<span className="absolute inset-x-full bottom-0 left-0 h-px w-full rounded-full bg-muted-foreground/20 group-hover:bg-muted-foreground/50 dark:bg-muted-foreground/50 dark:group-hover:bg-muted-foreground" />
				</Link>
			))}
		</nav>
	)

	return (
		<header className={cn("flex flex-col gap-4", className)} {...props}>
			<div className="flex items-start justify-between gap-5">
				<div>
					<h1 className="font-medium">{heading}</h1>
					<p>{description}</p>
				</div>
				<Logo />
			</div>

			{metaItems.length > 0 && (
				<div className="flex flex-wrap items-center gap-y-0.5 font-mono! text-sm tracking-wide text-muted-foreground uppercase">
					{metaItems.map((item, index) => (
						<span key={index} className={cn(index > 0 && "before:mx-2 before:content-['·']")}>
							{item}
						</span>
					))}
				</div>
			)}

			{stacks?.length ? (
				<div className="flex flex-col gap-3 sm:flex-row-reverse sm:items-center sm:justify-between">
					<StackLogos stacks={stacks} />
					{linksNav}
				</div>
			) : (
				linksNav
			)}
		</header>
	)
}
