import Navigation from "@/components/navigation"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto min-h-dvh max-w-4xl space-y-6 py-20 max-md:px-4">
			<div className="flex w-full items-center justify-between border-b">
				<Navigation className="w-fit" />
			</div>
			{children}
		</div>
	)
}
