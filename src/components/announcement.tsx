import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { BadgeInfoIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utils"

interface AnnouncementProps extends React.ComponentProps<typeof Alert> {
	title: string
	description: string
	cta: {
		label: React.ReactNode
		url: string
	}
}

export function Announcement({ title, description, cta, className, ...props }: AnnouncementProps) {
	return (
		<Alert className={cn(className)} {...props}>
			<BadgeInfoIcon className="text-blue-400!" />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
			<AlertAction className="top-1/2 right-4 -translate-y-1/2">
				<Button size="xs" render={<Link href={cta.url} />} nativeButton={false}>
					{cta.label}
				</Button>
			</AlertAction>
		</Alert>
	)
}
