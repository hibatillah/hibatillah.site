import { Skeleton } from "@/components/ui/skeleton"

function CardSkeleton() {
	return (
		<div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
			<div className="flex aspect-square flex-col">
				<div className="flex-1 border-b bg-muted/40" />
				<div className="flex flex-col gap-1.5 px-3 py-3">
					<Skeleton className="h-4 w-3/4" />
					<Skeleton className="h-3 w-full" />
				</div>
			</div>
		</div>
	)
}

export default function Loading() {
	return (
		<div className="grid grid-cols-2 gap-3 max-lg:px-4">
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</div>
	)
}
