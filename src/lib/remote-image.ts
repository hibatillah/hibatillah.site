"use server"

import { cache } from "react"
import { rgbaToThumbHash } from "thumbhash"
import sharp from "sharp"

export interface RemoteImage {
	src: string
	width: number
	height: number
	blurData?: string
	error?: string
}

export const getRemoteImage = cache(async (src: string): Promise<RemoteImage> => {
	try {
		const buffer = await fetch(src, { cache: "force-cache" }).then(async (res) => {
			if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`)
			return Buffer.from(await res.arrayBuffer())
		})

		const image = sharp(buffer)
		const { width: origWidth, height: origHeight } = await image.metadata()

		const { data, info } = await image
			.resize(100, 100, { fit: "inside" })
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true })

		const hash = rgbaToThumbHash(info.width, info.height, new Uint8Array(data))

		return {
			src,
			width: origWidth ?? 500,
			height: origHeight ?? 500,
			blurData: Buffer.from(hash).toString("base64"),
		}
	} catch (e) {
		console.error("Remote Image Error:", e)
		return {
			src,
			width: 500,
			height: 500,
			error: "Failed to load blur data",
		}
	}
})

export async function getRemoteImages(
	sources: { key: string; src: string }[],
): Promise<Record<string, RemoteImage>> {
	const results = await Promise.all(
		sources.map(async ({ key, src }) => {
			const image = await getRemoteImage(src)
			return { key, image }
		}),
	)

	return Object.fromEntries(results.map(({ key, image }) => [key, image]))
}
