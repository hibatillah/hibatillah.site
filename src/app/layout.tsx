import type { Metadata, Viewport } from "next"

import { MotionConfig } from "motion/react"
import { Geist, Geist_Mono } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import profile from "@/contents/profile.json"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import Provider from "./provider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		default: profile.title,
		template: `%s | ${profile.title}`,
	},
	description: profile.description,
	authors: {
		name: profile.name,
		url: profile.links.github,
	},
	metadataBase: new URL(profile.url),
	alternates: {
		canonical: "./",
	},
	openGraph: {
		title: profile.title,
		description: profile.description,
		siteName: profile.title,
		url: profile.url,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: profile.title,
		description: profile.description,
		creator: profile.links.x,
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
		{ media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("isolate antialiased", geistSans.variable, geistMono.variable)}>
				<MotionConfig reducedMotion="user">
					<Provider>
						{children}
						<Toaster />
						<Analytics />
						<SpeedInsights />
					</Provider>
				</MotionConfig>
			</body>
		</html>
	)
}
