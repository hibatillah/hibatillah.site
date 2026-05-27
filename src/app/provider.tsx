"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { TooltipProvider } from "../components/ui/tooltip"

export default function Provider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 1000 * 60 * 10,
					},
				},
			}),
	)

	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
			<QueryClientProvider client={queryClient}>
				<TooltipProvider delay={100}>{children}</TooltipProvider>
			</QueryClientProvider>
		</ThemeProvider>
	)
}
