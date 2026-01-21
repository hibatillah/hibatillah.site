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
