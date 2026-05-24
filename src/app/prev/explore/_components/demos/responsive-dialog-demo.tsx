"use client"

import { Button } from "@/components/ui/button"
import {
	ResponsiveDialog,
	ResponsiveDialogClose,
	ResponsiveDialogContent,
	ResponsiveDialogDescription,
	ResponsiveDialogFooter,
	ResponsiveDialogHeader,
	ResponsiveDialogTitle,
	ResponsiveDialogTrigger,
} from "@registry/components/responsive-dialog"

export function ResponsiveDialogDemo() {
	return (
		<ResponsiveDialog>
			<ResponsiveDialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</ResponsiveDialogTrigger>
			<ResponsiveDialogContent>
				<ResponsiveDialogHeader>
					<ResponsiveDialogTitle>Example Dialog</ResponsiveDialogTitle>
					<ResponsiveDialogDescription>
						On desktop this is a dialog. On mobile it slides up as a drawer.
					</ResponsiveDialogDescription>
				</ResponsiveDialogHeader>
				<ResponsiveDialogFooter>
					<ResponsiveDialogClose asChild>
						<Button>Close</Button>
					</ResponsiveDialogClose>
				</ResponsiveDialogFooter>
			</ResponsiveDialogContent>
		</ResponsiveDialog>
	)
}
