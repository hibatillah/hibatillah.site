import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<>
			<div className="flex flex-col gap-1.5 max-lg:px-4">
				<div className="flex items-center gap-2">
					<Skeleton className="h-6 w-44" />
					<Skeleton className="h-5 w-14 rounded-4xl" />
				</div>
				<Skeleton className="h-4 w-3/4" />
			</div>

			<div className="flex min-h-40 items-center justify-center rounded-xl border bg-card p-6 max-lg:mx-4">
				<Skeleton className="h-10 w-32 rounded-lg" />
			</div>

			<div className="space-y-3 max-lg:px-4">
				<Skeleton className="h-6 w-48" />
				<Skeleton className="h-5 w-full" />
				<Skeleton className="h-5 w-5/6" />
				<Skeleton className="mt-4 h-5 w-32" />
				<Skeleton className="h-28 w-full rounded-xl" />
				<Skeleton className="mt-2 h-5 w-32" />
				<Skeleton className="h-28 w-full rounded-xl" />
			</div>
		</>
	)
}
