"use client"

import { getRemoteImage, RemoteImage } from "@/lib/remote-image"
import { useQueries, useQuery } from "@tanstack/react-query"

export function useRemoteImage(src: string) {
	return useQuery({
		queryKey: ["remote-image", src],
		queryFn: async () => await getRemoteImage(src),
		enabled: !!src,
		staleTime: Infinity,
		gcTime: 1000 * 60 * 60 * 24,
	})
}

export function useRemoteImages(sources: { key: string; src: string }[]) {
	const queries = useQueries({
		queries: sources.map(({ key, src }) => ({
			queryKey: ["remote-image", key],
			queryFn: async () => await getRemoteImage(src),
			enabled: !!src,
			staleTime: Infinity,
			gcTime: 1000 * 60 * 60 * 24,
		})),
	})

	const images = sources.reduce(
		(acc, { key }, index) => {
			acc[key] = queries[index].data
			return acc
		},
		{} as Record<string, RemoteImage | undefined>,
	)

	const isLoading = queries.some((q) => q.isLoading)
	const isError = queries.some((q) => q.isError)

	return { images, isLoading, isError }
}
