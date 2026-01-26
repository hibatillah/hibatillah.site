"use server"

import { getPlaiceholder } from "plaiceholder"

export interface RemoteImage {
	src: string
	width: number
	height: number
	blurData?: string
	error?: string
}

export async function getRemoteImage(src: string): Promise<RemoteImage> {
	try {
		const buffer = await fetch(src, { cache: "force-cache" }).then(async (res) => {
			if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`)
			return Buffer.from(await res.arrayBuffer())
		})

		const { base64, metadata } = await getPlaiceholder(buffer)

		return {
			src,
			width: metadata.width,
			height: metadata.height,
			blurData: base64,
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
}

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
