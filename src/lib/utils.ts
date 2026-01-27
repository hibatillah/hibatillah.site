import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Sort data manually based on provided order.
 * @param a - The first item to sort.
 * @param b - The second item to sort.
 * @param order - The order to sort the items.
 * @example
 * ```ts
 * data.sort((a, b) => customSort(a, b, order))
 * ```
 */
export function customSort<T extends string>(a: T, b: T, order: T[]) {
	return order.indexOf(a) - order.indexOf(b)
}

export function getProjectStacks(stacks: string[], visibleCount: number = 2) {
	return {
		visible: stacks.slice(0, visibleCount),
		hidden: stacks.slice(visibleCount),
	}
}

export async function getFonts() {
	const GEIST_FONT_BASE_URL =
		"https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-sans"

	const [regular, semiBold, bold] = await Promise.all([
		fetch(`${GEIST_FONT_BASE_URL}/Geist-Regular.ttf`).then((res) => res.arrayBuffer()),
		fetch(`${GEIST_FONT_BASE_URL}/Geist-SemiBold.ttf`).then((res) => res.arrayBuffer()),
		fetch(`${GEIST_FONT_BASE_URL}/Geist-Bold.ttf`).then((res) => res.arrayBuffer()),
	])

	return [
		{ name: "Geist Sans", data: regular, style: "normal" as const, weight: 400 as const },
		{ name: "Geist Sans", data: semiBold, style: "normal" as const, weight: 600 as const },
		{ name: "Geist Sans", data: bold, style: "normal" as const, weight: 700 as const },
	]
}
