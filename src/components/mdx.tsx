"use client"

import { staggerContainer, staggerItem } from "@/lib/animations"
import { motion } from "motion/react"

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.article
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="space-y-1"
		>
			{children}
		</motion.article>
	)
}

export function Paragraph({ children, ...props }: React.ComponentProps<typeof motion.p>) {
	return (
		<motion.p variants={staggerItem} className="indent-4 text-base/relaxed" {...props}>
			{children}
		</motion.p>
	)
}
