import Navigation from "@/components/navigation"
import ThemeSwitcher from "@/components/theme-switcher"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { SearchSlashIcon } from "lucide-react"

export default function NotFound() {
	return (
		<div className="relative container mx-auto min-h-dvh max-w-4xl space-y-6 py-16">
			<div className="max-lg:px-4">
				<div className="flex w-full items-center justify-between border-b">
					<Navigation className="w-fit" />
				</div>
			</div>
			<Empty className="min-h-[50vh]">
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<SearchSlashIcon />
					</EmptyMedia>
					<EmptyTitle>
						<h1>404 - Page not found</h1>
					</EmptyTitle>
					<EmptyDescription>
						The page you're looking for doesn't exist or has been moved.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
			<ThemeSwitcher className="fixed end-3 bottom-4" />
		</div>
	)
}
