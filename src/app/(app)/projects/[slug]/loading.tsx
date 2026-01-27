import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default function Loading() {
	return (
		<div className="flex flex-col gap-6 max-lg:px-4">
			<Card>
				<CardContent className="space-y-2">
					<Skeleton className="h-6 w-4/5 md:w-1/2" />

					<div className="mt-1 flex flex-col gap-2 md:flex-row md:items-center">
						<Skeleton className="h-3 w-52 md:w-40" />
						<Skeleton className="size-1 max-md:hidden" />
						<Skeleton className="h-3 w-40" />
					</div>

					<div className="mt-1 flex flex-col justify-between gap-2 md:mt-0.5 md:flex-row md:items-end md:gap-6">
						<div className="flex items-center gap-2">
							{Array.from({ length: 3 }).map((_, i) => (
								<Skeleton key={i} className="h-5 w-14 rounded-full" />
							))}
							<Skeleton className="h-5 w-6 rounded-full" />
						</div>

						<div className="flex items-center gap-3 max-md:mt-1 max-md:justify-end">
							<Skeleton className="h-8 w-28" />
							<Skeleton className="h-8 w-28" />
						</div>
					</div>
				</CardContent>
			</Card>

			{Array.from({ length: 2 }).map((_, index) => (
				<div key={index} className="flex flex-col gap-2">
					<Skeleton className={cn("h-6", index === 0 ? "w-1/3" : "w-1/4")} />

					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />

					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</div>
			))}
		</div>
	)
}
