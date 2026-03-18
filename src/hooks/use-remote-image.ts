"use client"

import { getRemoteImage, RemoteImage } from "@/lib/remote-image"
import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query"

type ImageSource = { key: string; src: string }

const queryConfig = {
	staleTime: Infinity,
	gcTime: 1000 * 60 * 60 * 24,
}

export function useRemoteImage(src: string): UseQueryResult<RemoteImage>
export function useRemoteImage(sources: ImageSource[]): {
	images: Record<string, RemoteImage | undefined>
	isLoading: boolean
	isError: boolean
}
export function useRemoteImage(input: string | ImageSource[]) {
	const isSingle = typeof input === "string"

	const single = useQuery<RemoteImage>({
		queryKey: ["remote-image", isSingle ? input : null],
		queryFn: () => getRemoteImage(input as string),
		enabled: isSingle && !!input,
		...queryConfig,
	})

	const sources: ImageSource[] = isSingle ? [] : input
	const multi = useQueries({
		queries: sources.map(({ src }) => ({
			queryKey: ["remote-image", src],
			queryFn: () => getRemoteImage(src),
			enabled: !!src,
			...queryConfig,
		})),
	})

	if (isSingle) return single

	const images = sources.reduce(
		(acc, { key }, i) => {
			acc[key] = multi[i].data
			return acc
		},
		{} as Record<string, RemoteImage | undefined>,
	)

	return {
		images,
		isLoading: multi.some((q) => q.isLoading),
		isError: multi.some((q) => q.isError),
	}
}
