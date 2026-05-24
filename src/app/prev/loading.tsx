import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<div className="flex flex-col gap-6 max-lg:px-4">
			<Card className="flex flex-row gap-4 py-0">
				<Skeleton className="size-52 rounded-e-none max-md:hidden" />
				<CardContent className="grow py-6">
					<Skeleton className="mb-4 h-6 w-2/5" />

					<div className="flex flex-col gap-2">
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-2/3" />
					</div>

					<div className="mt-4 flex items-center gap-2">
						<Skeleton className="size-6" />
						<Skeleton className="size-6" />
						<Skeleton className="size-6" />
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="grid grid-cols-1 gap-6 py-1 md:grid-cols-2">
					{Array.from({ length: 2 }).map((_, index) => (
						<div key={index} className="flex flex-col gap-3">
							<Skeleton className="h-4 w-1/4" />

							<div className="mt-1 flex items-center gap-3">
								<Skeleton className="size-8" />
								<Skeleton className="h-6 w-1/2" />
							</div>

							<div className="mt-2 flex flex-col gap-2.5">
								<Skeleton className="h-3 w-full" />
								<Skeleton className="h-3 w-full" />
								<Skeleton className="h-3 w-full" />
								<Skeleton className="h-3 w-2/3" />
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			<Card className="flex flex-col gap-4 py-0 md:flex-row">
				<CardContent className="grow py-6">
					<Skeleton className="h-4 w-1/4" />

					<div className="mt-3 flex flex-col gap-2">
						<Skeleton className="h-6 w-full" />
						<Skeleton className="h-6 w-2/3" />
					</div>
				</CardContent>
				<Skeleton className="h-52 w-full rounded-t-none md:h-100 md:w-3/5 md:rounded-s-none" />
			</Card>
		</div>
	)
}
