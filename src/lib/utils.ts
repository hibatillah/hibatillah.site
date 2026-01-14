import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ThumbnailSource } from "./types"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getSafeSrc(src: ThumbnailSource): string {
	if (typeof src === "string") return src
	return src.light
}
