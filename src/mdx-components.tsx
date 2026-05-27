import { TextLink } from "@/components/text-link"
import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import {
	Blockquote,
	Heading2,
	Heading3,
	ListItem,
	ListOrdered,
	ListUnordered,
	Paragraph,
	Pre,
	Separator,
	Snippet,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
	Wrapper,
} from "./components/contents"
import { ImageFrame, ImageFrameGrid } from "./components/image-frame"
import { cn } from "./lib/utils"

const components: MDXComponents = {
	wrapper: Wrapper,
	h2: Heading2,
	h3: Heading3,
	p: Paragraph,
	blockquote: Blockquote,
	TextLink,
	hr: Separator,
	pre: Pre,
	abbr: ({ className, ...props }) => (
		<abbr
			className={cn(
				"decoration-dotted underline-offset-4 max-md:no-underline md:cursor-help md:underline",
				className,
			)}
			{...props}
		/>
	),
	Snippet: Snippet,
	code: ({ className, children, ...props }) => {
		const isBlock = className?.startsWith("language-")

		if (isBlock) {
			return (
				<code className={cn("font-mono text-sm", className)} {...props}>
					{children}
				</code>
			)
		}

		return (
			<code
				{...props}
				className={cn(
					"relative rounded-sm bg-white px-1.5 py-0.5 font-mono text-sm text-foreground not-dark:border dark:bg-muted",
					className,
				)}
			>
				{children}
			</code>
		)
	},
	ul: ListUnordered,
	ol: ListOrdered,
	li: ListItem,
	table: TableRoot,
	thead: TableHead,
	tbody: ({ children }) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>,
	tr: TableRow,
	th: TableHeader,
	td: TableCell,
	ImageFrameGrid,
	ImageFrame,
	Image: Image,
}

export function useMDXComponents(): MDXComponents {
	return components
}
