import { TextLink } from "@/components/text-link"
import type { MDXComponents } from "mdx/types"
import { Paragraph, Wrapper } from "./components/mdx"

const components: MDXComponents = {
	wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
	p: ({ children, ...props }) => <Paragraph {...props}>{children}</Paragraph>,
	TextLink,
}

export function useMDXComponents(): MDXComponents {
	return components
}
