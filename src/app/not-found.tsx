import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"
import { Logo } from "../components/logo"
import { Button } from "../components/ui/button"

export default function NotFound() {
	return (
		<div className="grid min-h-dvh place-items-center">
			<Empty className="w-fit">
				<EmptyHeader>
					<EmptyMedia>
						<Logo />
					</EmptyMedia>
					<EmptyTitle>
						<h1>404 - Page not found</h1>
					</EmptyTitle>
					<EmptyDescription>
						The page you're looking for doesn't exist or has been moved.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Button render={<Link href="/" />} nativeButton={false}>
						Back to Home
					</Button>
				</EmptyContent>
			</Empty>
		</div>
	)
}
