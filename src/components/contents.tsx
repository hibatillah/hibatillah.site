"use client"

import { Separator as SeparatorComponent } from "@/components/ui/separator"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image from "next/image"

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.article
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="space-y-2"
		>
			{children}
		</motion.article>
	)
}

export function Heading1({ className, ...props }: React.ComponentProps<typeof motion.h1>) {
	return (
		<motion.h1
			variants={staggerItem}
			className={cn("mt-8 text-xl/snug font-medium max-lg:px-4", className)}
			{...props}
		/>
	)
}

export function Heading2({ className, ...props }: React.ComponentProps<typeof motion.h2>) {
	return (
		<motion.h2
			variants={staggerItem}
			className={cn("mt-6 text-lg/snug font-normal max-lg:px-4", className)}
			{...props}
		/>
	)
}

export function Heading3({ className, ...props }: React.ComponentProps<typeof motion.h3>) {
	return (
		<motion.h3
			variants={staggerItem}
			className={cn("mt-4 text-base/snug font-normal max-lg:px-4", className)}
			{...props}
		/>
	)
}

export function Paragraph({ className, ...props }: React.ComponentProps<typeof motion.p>) {
	return (
		<motion.p
			variants={staggerItem}
			className={cn("text-base/relaxed max-lg:px-4", className)}
			{...props}
		/>
	)
}

export function ListUnordered({ className, ...props }: React.ComponentProps<typeof motion.ul>) {
	return (
		<motion.ul
			variants={staggerItem}
			className={cn("my-3 ms-9 list-disc max-lg:me-4 lg:ms-6 [&>li]:mt-1", className)}
			{...props}
		/>
	)
}

export function ListOrdered({ className, ...props }: React.ComponentProps<typeof motion.ol>) {
	return (
		<motion.ol
			variants={staggerItem}
			className={cn("my-3 ms-9 list-decimal max-lg:me-4 lg:ms-6 [&>li]:mt-1", className)}
			{...props}
		/>
	)
}

export function ListItem({ className, ...props }: React.ComponentProps<typeof motion.li>) {
	return (
		<motion.li
			variants={staggerItem}
			className={cn("marker:text-muted-foreground", className)}
			{...props}
		/>
	)
}

export function TableRoot({ className, ...props }: React.ComponentProps<"table">) {
	return (
		<motion.div variants={staggerItem} className="my-6 w-full overflow-y-auto max-lg:px-4">
			<table className={cn("w-full caption-bottom text-sm", className)} {...props} />
		</motion.div>
	)
}

export function TableHead({ className, ...props }: React.ComponentProps<typeof motion.thead>) {
	return (
		<motion.thead variants={staggerItem} className={cn("[&_tr]:border-b", className)} {...props} />
	)
}

export function TableRow({ className, ...props }: React.ComponentProps<typeof motion.tr>) {
	return (
		<motion.tr
			variants={staggerItem}
			className={cn(
				"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
				className,
			)}
			{...props}
		/>
	)
}

export function TableHeader({ className, ...props }: React.ComponentProps<typeof motion.th>) {
	return (
		<motion.th
			variants={staggerItem}
			className={cn("h-10 px-2 text-left align-middle font-medium text-foreground", className)}
			{...props}
		/>
	)
}

export function TableCell({ className, ...props }: React.ComponentProps<typeof motion.td>) {
	return (
		<motion.td
			variants={staggerItem}
			className={cn("p-2 align-middle text-muted-foreground", className)}
			{...props}
		/>
	)
}

interface ImageWrapperProps extends React.ComponentProps<typeof motion.div> {
	size?: "sm" | "md" | "lg"
}

export function ImageWrapper({ size = "md", className, ...props }: ImageWrapperProps) {
	return (
		<motion.div
			variants={staggerItem}
			data-slot="image-wrapper"
			className={cn(
				"my-6 scrollbar-hide flex items-center gap-3 overflow-x-auto max-lg:px-4",
				size === "sm" && "h-48",
				size === "md" && "h-60",
				size === "lg" && "h-72",
				className,
			)}
			{...props}
		/>
	)
}

export function ImageItem({ src, alt, className, ...props }: React.ComponentProps<typeof Image>) {
	return (
		<Image
			src={src}
			alt={alt}
			width={1000}
			height={1000}
			placeholder="blur"
			className={cn(
				"rounded-md border object-cover max-lg:max-w-[90vw] dark:brightness-90",
				"in-data-[slot=image-wrapper]:h-full in-data-[slot=image-wrapper]:w-auto in-data-[slot=image-wrapper]:max-w-md",
				"not-in-data-[slot=image-wrapper]:my-6 not-in-data-[slot=image-wrapper]:h-auto not-in-data-[slot=image-wrapper]:w-full not-in-data-[slot=image-wrapper]:max-lg:mx-4",
				className,
			)}
			{...props}
		/>
	)
}

export function Separator({ className, ...props }: React.ComponentProps<typeof motion.div>) {
	return (
		<motion.div variants={staggerItem} className={cn("my-4 max-md:px-4", className)} {...props}>
			<SeparatorComponent />
		</motion.div>
	)
}
