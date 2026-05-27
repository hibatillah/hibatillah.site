"use client"

import { Button } from "@/components/ui/button"
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"
import { useEffect } from "react"
import { Logo } from "../components/logo"

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
		<div className="grid min-h-dvh place-items-center">
			<Empty className="w-fit">
				<EmptyHeader>
					<EmptyMedia>
						<Logo />
					</EmptyMedia>
					<EmptyTitle>
						<h1>Something went wrong</h1>
					</EmptyTitle>
					<EmptyDescription>An unexpected error occurred. Please try again.</EmptyDescription>
				</EmptyHeader>
				<EmptyContent className="flex flex-row items-center justify-center gap-2">
					<Button onClick={reset}>Try again</Button>
					<Button variant="secondary" render={<Link href="/" />} nativeButton={false}>
						Back Home
					</Button>
				</EmptyContent>
			</Empty>
		</div>
	)
}
