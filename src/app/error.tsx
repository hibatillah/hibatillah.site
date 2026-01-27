"use client"

import Navigation from "@/components/navigation"
import ThemeSwitcher from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import { TriangleAlertIcon } from "lucide-react"
import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

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
						<TriangleAlertIcon />
					</EmptyMedia>
					<EmptyTitle>
						<h1>Something went wrong</h1>
					</EmptyTitle>
					<EmptyDescription>An unexpected error occurred. Please try again later.</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Button onClick={reset}>Try again</Button>
				</EmptyContent>
			</Empty>
			<ThemeSwitcher className="fixed end-3 bottom-4" />
		</div>
	)
}
