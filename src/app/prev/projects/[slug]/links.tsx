"use client"

import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BookOpenIcon, GitPullRequestIcon, GlobeIcon } from "lucide-react"
import Link from "next/link"

export default function ProjectLinks({ data, className }: { data: Project; className?: string }) {
	const isMobile = useIsMobile()

	return (
		<div className={cn("flex flex-row flex-wrap gap-3", className)}>
			{data.docs && (
				<Button
					size={isMobile ? "lg" : "default"}
					variant="outline"
					aria-label="Documentation"
					render={<Link href={data.docs} target="_blank" rel="noopener noreferrer" />}
					nativeButton={false}
				>
					<BookOpenIcon />
					{isMobile ? "Docs" : "Documentation"}
				</Button>
			)}
			{data.repo && (
				<Button
					size={isMobile ? "lg" : "default"}
					variant="outline"
					aria-label="Repository"
					render={<Link href={data.repo} target="_blank" rel="noopener noreferrer" />}
					nativeButton={false}
				>
					<GitPullRequestIcon />
					{isMobile ? "Repo" : "Repository"}
				</Button>
			)}
			{data.live && (
				<Button
					size={isMobile ? "lg" : "default"}
					variant="outline"
					aria-label="Live"
					render={<Link href={data.live} target="_blank" rel="noopener noreferrer" />}
					nativeButton={false}
				>
					<GlobeIcon />
					<span>Live</span>
				</Button>
			)}
		</div>
	)
}
