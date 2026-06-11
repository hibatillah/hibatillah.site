import type { Metadata, Viewport } from "next"

import { MotionConfig } from "motion/react"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import { JsonLd } from "@/components/json-ld"
import { Toaster } from "@/components/ui/sonner"
import profile from "@/contents/profile.json"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
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

const calloveya = localFont({
	src: "../static/fonts/Calloveya.woff2",
	variable: "--font-calloveya-raw",
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		default: profile.name,
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
		{ media: "(prefers-color-scheme: light)", color: "#FCFCFC" },
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
			<body
				className={cn(
					"isolate font-sans antialiased",
					geistSans.variable,
					geistMono.variable,
					calloveya.variable,
				)}
			>
				<JsonLd />
				<MotionConfig reducedMotion="user">
					<Provider>
						{children}
						<Toaster />
						<Analytics />
						<SpeedInsights />
						<Script
							src="https://static.cloudflareinsights.com/beacon.min.js"
							data-cf-beacon='{"token": "95733bfa7c5a497ab02dbf9fcf2b6327"}'
							defer
						/>
						{process.env.NODE_ENV === "development" && (
							<Script
								src="//unpkg.com/react-grab/dist/index.global.js"
								crossOrigin="anonymous"
								strategy="beforeInteractive"
							/>
						)}
					</Provider>
				</MotionConfig>
			</body>
		</html>
	)
}
