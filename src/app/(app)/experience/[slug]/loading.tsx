import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default function Loading() {
	return (
		<div className="flex flex-col gap-6 max-lg:px-4">
			<Card>
				<CardContent className="relative space-y-2">
					<Skeleton className="h-6 w-1/3" />

					<div className="mt-1 flex flex-col gap-2 md:flex-row md:items-center">
						<Skeleton className="h-3 w-60 md:w-40" />
						<Skeleton className="size-1 max-md:hidden" />
						<Skeleton className="h-3 w-40" />
						<Skeleton className="size-1 max-md:hidden" />
						<Skeleton className="h-3 w-52 md:w-40" />
					</div>

					<Skeleton className="absolute end-5 top-0 size-10 md:top-1/2 md:-translate-y-1/2" />
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
