import { TextLink } from "@/components/text-link"
import type { MDXComponents } from "mdx/types"
import {
	Heading1,
	Heading2,
	Heading3,
	ImageItem,
	ImageWrapper,
	ListItem,
	ListOrdered,
	ListUnordered,
	Paragraph,
	Separator,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
	Wrapper,
} from "./components/contents"
import { cn } from "./lib/utils"

const components: MDXComponents = {
	wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,

	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	p: Paragraph,
	TextLink,
	hr: Separator,
	code: ({ className, ...props }) => {
		return (
			<code
				{...props}
				className={cn(
					"relative rounded-sm bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
					className,
				)}
			/>
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

	ImageWrapper,
	ImageItem,
}

export function useMDXComponents(): MDXComponents {
	return components
}
