import { NextResponse, type NextRequest } from "next/server"

/**
 * Markdown content negotiation for agents (RFC 7231 §5.3.2).
 *
 * When a request carries `Accept: text/markdown`, serve the markdown
 * representation that already exists for the route — without changing the URL:
 *
 * - `/`                        → `/llms.txt` (the site map for LLMs)
 * - `/project|work|edu/<slug>` → `/raw/<type>/<slug>` (the raw MDX endpoint)
 *
 * Browsers (which send `Accept: text/html`) fall through untouched, so the
 * HTML response stays the default. `[^/.]+` keeps `<slug>.md` paths (handled by
 * the rewrites in next.config.ts) out of this matcher.
 */
const NEGOTIABLE = /^\/(project|work|edu)\/([^/.]+)$/

export function proxy(request: NextRequest) {
	const accept = request.headers.get("accept") ?? ""
	if (!accept.includes("text/markdown")) return NextResponse.next()

	const { pathname } = request.nextUrl

	if (pathname === "/") {
		const url = request.nextUrl.clone()
		url.pathname = "/llms.txt"
		return NextResponse.rewrite(url)
	}

	const match = pathname.match(NEGOTIABLE)

	if (match) {
		const url = request.nextUrl.clone()
		url.pathname = `/raw/${match[1]}/${match[2]}`
		return NextResponse.rewrite(url)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/", "/project/:slug", "/work/:slug", "/edu/:slug"],
}
