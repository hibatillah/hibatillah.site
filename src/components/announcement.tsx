import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon, BadgeInfoIcon } from "lucide-react"
import { cn } from "../lib/utils"

export function Announcement({ className, ...props }: React.ComponentProps<typeof Alert>) {
	return (
		<Alert className={cn(className)} {...props}>
			<BadgeInfoIcon className="text-blue-400!" />
			<AlertTitle>New component release!</AlertTitle>
			<AlertDescription>Release new `Description List` component, try it out!</AlertDescription>
			<AlertAction className="top-1/2 right-4 -translate-y-1/2">
				<Button size="xs">
					Check 'em <ArrowUpRightIcon />
				</Button>
			</AlertAction>
		</Alert>
	)
}
