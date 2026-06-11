import { ItemLink } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

interface HeaderProps extends React.ComponentProps<"header"> {
	heading: string
	description: string
	links?: ItemLink[]
}

export function Header({ heading, description, links, className, ...props }: HeaderProps) {
	return (
		<header className={cn("flex flex-col gap-4", className)} {...props}>
			<div className="flex items-start justify-between gap-5">
				<div>
					<h1 className="font-medium">{heading}</h1>
					<p>{description}</p>
				</div>
				<Logo />
			</div>

			{links && (
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
			)}
		</header>
	)
}
