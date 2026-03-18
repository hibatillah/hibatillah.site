import { thumbHashToDataURL } from "thumbhash"

export function decodeThumbhash(hash: string): string {
	const bytes = Buffer.from(hash, "base64")
	return thumbHashToDataURL(new Uint8Array(bytes))
}
