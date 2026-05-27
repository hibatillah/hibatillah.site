import { cn } from "@/lib/utils"
import { Logo } from "./logo"

interface HeaderProps extends React.ComponentProps<"header"> {
	heading: string
	description: string
}

export function Header({ heading, description, className, ...props }: HeaderProps) {
	return (
		<header className={cn("flex items-start justify-between gap-6", className)} {...props}>
			<div>
				<h1 className="font-medium">{heading}</h1>
				<p>{description}</p>
			</div>
			<Logo />
		</header>
	)
}
