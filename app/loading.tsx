import { cn } from "@/lib/util";

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-glass", className)} />;
}

export default function loading() {
  return (
    <div className="container space-y-28">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 py-16">
        <div className="col-span-1 space-y-24">
          <Skeleton className="h-5 w-24" />
          <div className="space-y-5">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-5/6 h-10" />
            <Skeleton className="w-1/2 h-10" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-16 h-5" />
            <Skeleton className="w-16 h-5" />
            <Skeleton className="w-16 h-5" />
          </div>
        </div>
        <div className="col-span-1 space-y-24">
          <Skeleton className="h-5 w-24" />
          <div className="grid grid-cols-2 gap-6 h-96">
            <Skeleton className="col-span-1" />
            <Skeleton className="col-span-1 row-start-2" />
            <Skeleton className="col-span-1 row-span-2 col-start-1" />
          </div>
          <div className="space-y-5">
            <Skeleton className="w-full h-32" />
            <Skeleton className="w-full h-32" />
          </div>
        </div>
      </main>
    </div>
  );
}
