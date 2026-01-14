import { cn } from "@/lib/utils"

export function GitHubIcon({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			className={cn("size-4", className)}
			viewBox="0 0 98 96"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				className="fill-current"
				d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
			/>
		</svg>
	)
}

export function LinkedInIcon({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			id="Group_1282"
			data-name="Group 1282"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 66 66"
			className={cn("size-4", className)}
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<path
				id="Path_2520"
				data-name="Path 2520"
				d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
				transform="translate(-903.776 -57.355)"
				className="fill-current"
			/>
		</svg>
	)
}

export function XTwitterIcon({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={cn("size-4", className)}
			viewBox="0 0 49.8 45"
			xmlSpace="preserve"
			{...props}
		>
			<g>
				<path
					className="fill-current"
					d="M39.2,0h7.6L30.2,19.1L49.8,45H34.4l-12-15.7L8.6,45H1l17.8-20.4L0,0h15.8l10.9,14.4L39.2,0z M36.5,40.4h4.2L13.5,4.3H8.9L36.5,40.4z"
				/>
			</g>
		</svg>
	)
}
