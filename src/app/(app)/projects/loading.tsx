import { Card, CardContent } from "../../../components/ui/card"
import { Skeleton } from "../../../components/ui/skeleton"

export default function Loading() {
	return (
		<div className="grid grid-cols-1 gap-4 max-lg:px-4 md:grid-cols-2">
			{Array.from({ length: 4 }).map((_, index) => (
				<Card key={index} className="h-84 pt-0">
					<Skeleton className="aspect-2/1 w-full rounded-b-none" />
					<CardContent className="flex flex-col gap-2">
						<Skeleton className="h-6 w-8/10" />
						<Skeleton className="h-4 w-full" />

						<div className="mt-0.5 flex items-end justify-between gap-6">
							<div className="flex items-center gap-2">
								{Array.from({ length: 3 }).map((_, i) => (
									<Skeleton key={i} className="h-4 w-14" />
								))}
								<Skeleton className="h-5 w-6" />
							</div>

							<div className="flex items-center gap-2">
								<Skeleton className="size-8" />
								<Skeleton className="size-8" />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
