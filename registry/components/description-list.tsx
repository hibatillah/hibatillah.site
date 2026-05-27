import { cn } from "@/lib/utils"

interface DescriptionListItem {
	label: React.ReactNode
	value?: React.ReactNode
}

export function DescriptionList({ className, ...props }: React.ComponentProps<"dl">) {
	return (
		<dl
			className={cn("grid grid-cols-1 gap-x-4 sm:grid-cols-[1fr_3fr] sm:gap-y-2", className)}
			{...props}
		/>
	)
}

/**
 * Description List Item contains both label and value.
 *
 * Customize label and value through DescriptionList
 * ```tsx
 * <DescriptionList className="[&_dt]:text-primary">
 *   <DescriptionListItem label="Name" value="John Doe" />
 * </DescriptionList>
 * ```
 */
export function DescriptionListItem({ label, value }: DescriptionListItem) {
	return (
		<>
			<dt className="text-muted-foreground">{label}</dt>
			<dd className="wrap-break-word max-sm:mb-2 max-sm:font-medium">{value ?? "-"}</dd>
		</>
	)
}
