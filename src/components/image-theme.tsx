import { ThumbnailSource } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ImageThemeProps extends Omit<React.ComponentProps<typeof Image>, "src"> {
	src: ThumbnailSource
}

export function ImageTheme({ src, className, ...props }: ImageThemeProps) {
	if (typeof src === "string") {
		return <Image src={src} className={className} {...props} />
	}

	return (
		<>
			<Image src={src.light} className={cn(className, "dark:hidden")} {...props} />
			<Image src={src.dark} className={cn(className, "hidden dark:block")} {...props} />
		</>
	)
}
