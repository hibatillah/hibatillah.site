import Navigation from "@/components/navigation"
import ThemeSwitcher from "@/components/theme-switcher"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative container mx-auto min-h-dvh max-w-4xl space-y-6 py-16">
			<div className="max-lg:px-4">
				<div className="flex w-full items-center justify-between border-b">
					<Navigation className="w-fit" />
				</div>
			</div>
			{children}
			<ThemeSwitcher className="fixed end-3 bottom-4" />
		</div>
	)
}
