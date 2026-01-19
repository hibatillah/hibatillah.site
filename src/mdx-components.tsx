import { TextLink } from "@/components/text-link"
import type { MDXComponents } from "mdx/types"
import {
	Heading1,
	Heading2,
	Heading3,
	ListItem,
	ListOrdered,
	ListUnordered,
	Paragraph,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
	ImageWrapper,
	Wrapper,
	ImageItem,
} from "./components/contents"

const components: MDXComponents = {
	wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,

	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	p: Paragraph,
	TextLink,

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
