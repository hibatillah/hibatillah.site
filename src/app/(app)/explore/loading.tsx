import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<div className="max-md:px-4">
			<div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 rounded-xl border bg-card p-8">
				<Skeleton className="size-10 rounded-full" />
				<Skeleton className="h-5 w-48" />
				<Skeleton className="h-4 w-72" />
			</div>
		</div>
	)
}
