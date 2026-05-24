"use client"

import { Separator as SeparatorComponent } from "@/components/ui/separator"
import { useCopyToClipboard } from "@/hooks/use-copy-clipboard"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { RemoteImage } from "@/lib/remote-image"
import { decodeThumbhash } from "@/lib/thumbhash"
import { cn, slugify } from "@/lib/utils"
import { CopyIcon, LinkIcon, SquareCheckIcon } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import { createContext, useContext, useState } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Card, CardFooter, CardHeader } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.article
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex flex-col gap-6 max-lg:px-4"
		>
			{children}
		</motion.article>
	)
}

export function Heading2({ className, children, ...props }: React.ComponentProps<"h2">) {
	const id = typeof children === "string" ? slugify(children) : undefined

	return (
		<motion.a
			href={id ? `#${id}` : undefined}
			variants={staggerItem}
			className={cn("relative mt-6 block w-fit leading-snug font-normal", className)}
		>
			<h2 id={id} className="peer/heading w-fit scroll-mt-12" {...props}>
				{children}
			</h2>

			<LinkIcon className="invisible absolute top-1/2 -left-6 size-[14px] -translate-y-1/2 opacity-0 transition-all duration-100 ease-linear peer-hover/heading:visible peer-hover/heading:opacity-200" />
		</motion.a>
	)
}

export function Heading3({ className, children, ...props }: React.ComponentProps<"h3">) {
	const id = typeof children === "string" ? slugify(children) : undefined

	return (
		<motion.a
			href={id ? `#${id}` : undefined}
			variants={staggerItem}
			className={cn("relative mt-4 block w-fit text-base/snug font-medium", className)}
		>
			<h3 id={id} className="peer/heading w-fit scroll-mt-12" {...props}>
				{children}
			</h3>

			<LinkIcon className="invisible absolute top-1/2 -left-6 size-[14px] -translate-y-1/2 opacity-0 transition-all duration-100 ease-linear peer-hover/heading:visible peer-hover/heading:opacity-200" />
		</motion.a>
	)
}

export function Paragraph({ className, ...props }: React.ComponentProps<typeof motion.p>) {
	return (
		<motion.p
			variants={staggerItem}
			className={cn("text-base/relaxed text-foreground/70", className)}
			{...props}
		/>
	)
}

export function Blockquote({
	className,
	...props
}: React.ComponentProps<typeof motion.blockquote>) {
	return (
		<motion.blockquote
			variants={staggerItem}
			className={cn(
				"my-2 border-s-3 border-muted-foreground py-1 ps-4 text-muted-foreground italic",
				className,
			)}
			{...props}
		/>
	)
}

export function ListUnordered({ className, ...props }: React.ComponentProps<typeof motion.ul>) {
	return (
		<motion.ul
			variants={staggerItem}
			className={cn("ms-9 list-disc space-y-3 max-lg:me-4 lg:ms-6", className)}
			{...props}
		/>
	)
}

export function ListOrdered({ className, ...props }: React.ComponentProps<typeof motion.ol>) {
	return (
		<motion.ol
			variants={staggerItem}
			className={cn("ms-9 list-decimal space-y-3 max-lg:me-4 lg:ms-6", className)}
			{...props}
		/>
	)
}

export function ListItem({ className, ...props }: React.ComponentProps<typeof motion.li>) {
	return (
		<motion.li
			variants={staggerItem}
			className={cn("marker:text-foreground", className)}
			{...props}
		/>
	)
}

export function TableRoot({ className, ...props }: React.ComponentProps<"table">) {
	return (
		<motion.div variants={staggerItem} className="my-6 w-full overflow-y-auto">
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
			className={cn("h-10 px-2 text-left align-middle font-normal text-foreground", className)}
			{...props}
		/>
	)
}

export function TableCell({ className, ...props }: React.ComponentProps<typeof motion.td>) {
	return (
		<motion.td
			variants={staggerItem}
			className={cn("p-2 align-middle text-foreground/70", className)}
			{...props}
		/>
	)
}

export function Pre({ className, ...props }: React.ComponentProps<typeof motion.pre>) {
	return (
		<motion.pre
			variants={staggerItem}
			className={cn(
				"my-4 overflow-x-auto rounded-xl bg-card p-4 font-mono text-sm leading-relaxed font-normal max-lg:mx-4",
				className,
			)}
			{...props}
		/>
	)
}

export function Separator({ className, ...props }: React.ComponentProps<typeof motion.div>) {
	return (
		<motion.div variants={staggerItem} className={cn("my-4 px-4 md:px-12", className)} {...props}>
			<SeparatorComponent />
		</motion.div>
	)
}

const ImageContext = createContext<{ height: number } | null>(null)

const SIZE_MAP = {
	md: 240, // h-60
	lg: 288, // h-72
}

interface ImageWrapperProps extends React.ComponentProps<typeof motion.div> {
	size?: "md" | "lg"
}

export function ImageWrapper({ size = "md", className, children, ...props }: ImageWrapperProps) {
	return (
		<ImageContext.Provider value={{ height: SIZE_MAP[size] }}>
			<motion.div
				variants={staggerItem}
				data-slot="image-wrapper"
				className={cn(
					"my-6 scrollbar-hide flex items-center gap-3 overflow-x-auto max-lg:-mx-4 max-lg:px-4",
					size === "md" && "h-60",
					size === "lg" && "h-72",
					className,
				)}
				{...props}
			>
				{children}
			</motion.div>
		</ImageContext.Provider>
	)
}

interface ImageItemProps extends Omit<React.ComponentProps<typeof Image>, "src"> {
	image: RemoteImage
}

export function ImageItem({ image, alt, className, ...props }: ImageItemProps) {
	const context = useContext(ImageContext)
	const { width, height } = image

	let styles = {}

	if (context && width && height) {
		const aspectRatio = Number(width) / Number(height)
		const targetWidth = context.height * aspectRatio

		styles = { width: Math.round(targetWidth) }
	}

	return (
		<Image
			src={image?.src}
			alt={alt}
			width={image.width}
			height={image.height}
			placeholder={image.blurData ? "blur" : "empty"}
			blurDataURL={image.blurData ? decodeThumbhash(image.blurData) : undefined}
			style={styles}
			className={cn(
				"rounded-md border object-cover dark:brightness-90",
				"in-data-[slot=image-wrapper]:h-full in-data-[slot=image-wrapper]:max-w-md",
				"not-in-data-[slot=image-wrapper]:my-6 not-in-data-[slot=image-wrapper]:h-auto not-in-data-[slot=image-wrapper]:w-full not-in-data-[slot=image-wrapper]:max-lg:mx-4",

				className,
			)}
			{...props}
		/>
	)
}

export type PackageManger = "npm" | "pnpm" | "yarn" | "bun"

export function Snippet({ path }: { path: string }) {
	const [selected, setSelected] = useState<PackageManger>("npm")
	const [copy, isCopied] = useCopyToClipboard()

	const packageManagers = {
		npm: "npx shadcn@latest add",
		pnpm: "pnpm dlx shadcn@latest add",
		yarn: "yarn dlx shadcn@latest add",
		bun: "bunx --bun shadcn@latest add",
	} as Record<PackageManger, string>

	return (
		<Card className="relative gap-0 p-0">
			<Tabs
				value={selected}
				onValueChange={(value) => setSelected(value as PackageManger)}
				className="gap-0"
			>
				<CardHeader className="p-2">
					<TabsList>
						<TabsTrigger value="npm">npm</TabsTrigger>
						<TabsTrigger value="pnpm">pnpm</TabsTrigger>
						<TabsTrigger value="yarn">yarn</TabsTrigger>
						<TabsTrigger value="bun">bun</TabsTrigger>
					</TabsList>
				</CardHeader>
				<CardFooter className="w-full overflow-x-auto p-4 pe-14 text-nowrap">
					{Object.entries(packageManagers).map(([key, value]) => (
						<TabsContent key={key} value={key}>
							<code className="font-mono text-sm">
								{value} {path}
							</code>
						</TabsContent>
					))}
					<Button
						size="icon-sm"
						variant="outline"
						className="absolute right-3 bottom-4 z-20 max-sm:bg-card! md:bottom-3"
						onClick={() =>
							copy(`${packageManagers[selected]} ${path}`).then(() =>
								toast.success("Copied to clipboard"),
							)
						}
					>
						{isCopied ? <SquareCheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
					</Button>
				</CardFooter>
			</Tabs>
		</Card>
	)
}
