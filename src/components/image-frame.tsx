import { cn } from "../lib/utils"

export type StackOffset =
	/** Top-left: shifts up-left and tilts counter-clockwise. */
	| "tl"
	/** Top-right: shifts up-right and tilts clockwise. */
	| "tr"
	/** Bottom-left: shifts down-left and tilts counter-clockwise. */
	| "bl"
	/** Bottom-right: shifts down-right and tilts clockwise. */
	| "br"
	/** Left: shifts left with a slight counter-clockwise tilt. */
	| "l"
	/** Right: shifts right with a slight clockwise tilt. */
	| "r"
	/** Top: shifts upward with minimal rotation. */
	| "t"
	/** Bottom: shifts downward with minimal rotation. */
	| "b"
	/** Center: near-zero offset, used as a quiet anchor in a stack. */
	| "c"

export const STACK_OFFSETS: Record<
	StackOffset,
	Record<"x" | "y" | "r" | "hx" | "hy" | "hr", number>
> = {
	tl: { x: -12, y: -9, r: -8, hx: -32, hy: -24, hr: -9 },
	tr: { x: 5, y: -8, r: 9, hx: 31, hy: -20, hr: 12 },
	bl: { x: -9, y: 4, r: -6, hx: -24, hy: 13, hr: -7 },
	br: { x: 3, y: 9, r: 7, hx: 24, hy: 18, hr: 11 },
	l: { x: -10, y: 1, r: -2, hx: -15, hy: 9, hr: -8 },
	r: { x: 12, y: 9, r: 5, hx: 32, hy: 8, hr: 8 },
	t: { x: 2, y: -9, r: 2, hx: 4, hy: -12, hr: 5 },
	b: { x: -3, y: 7, r: -3, hx: -5, hy: 22, hr: -4 },
	c: { x: 1, y: -1, r: 0, hx: 2, hy: -3, hr: 2 },
}

type OffsetApply =
	/** Static offset only */
	| "rest"
	/** Animates to the offset on group hover. */
	| "hover"
	/** Transitions between the rest and hover offsets. */
	| "both"

type OffsetTransform = "translate" | "rotate" | "both"

type OffsetTrigger =
	/** Hover state fires when the nearest `.group` ancestor is hovered. */
	| "group"
	/** Hover state fires when the frame itself is hovered. */
	| "self"

interface ImageFrameProps extends React.ComponentProps<"div"> {
	/** Frame padding scale (polaroid border thickness). */
	size?: "sm" | "default" | "lg"
	/** Preset from `STACK_OFFSETS` for translate + rotate. Omit for a flat frame. */
	offset?: StackOffset
	/** Multiplier for the preset's translate values. Default `1`. */
	spread?: number
	/** When the offset applies. See {@link OffsetApply}. Default `both`. */
	apply?: OffsetApply
	/** Which parts of the offset are used. See {@link OffsetTransform}. Default `both`. */
	transform?: OffsetTransform
	/** What activates the hover state. See {@link OffsetTrigger}. Default `group`. */
	trigger?: OffsetTrigger
}

export function ImageFrame({
	size,
	offset,
	spread = 1,
	apply = "both",
	transform = "both",
	trigger = "group",
	className,
	style,
	...props
}: ImageFrameProps) {
	const o = offset ? STACK_OFFSETS[offset] : null
	const restAttr = apply !== "hover" ? transform : undefined
	const hoverAttr = apply !== "rest" ? transform : undefined

	return (
		<div
			data-size={size}
			data-offset={offset}
			data-rest={restAttr}
			data-hover={hoverAttr}
			data-trigger={trigger}
			className={cn(
				"aspect-video h-auto max-h-96 min-w-20 bg-white p-2 shadow-lg will-change-transform data-[size=lg]:p-4 data-[size=sm]:p-1 data-[size=sm]:shadow-md dark:bg-neutral-200 [&>img]:size-full [&>img]:object-cover [&>img]:dark:brightness-95",
				"data-offset:transition-transform data-offset:duration-300 data-offset:ease-out",
				"data-[rest=translate]:transform-[translate(var(--tx),var(--ty))]",
				"data-[rest=rotate]:transform-[rotate(var(--tr))]",
				"data-[rest=both]:transform-[translate(var(--tx),var(--ty))_rotate(var(--tr))]",
				"data-[trigger=group]:group-hover:data-[hover=translate]:transform-[translate(var(--htx),var(--hty))]",
				"data-[trigger=group]:group-hover:data-[hover=rotate]:transform-[rotate(var(--htr))]",
				"data-[trigger=group]:group-hover:data-[hover=both]:transform-[translate(var(--htx),var(--hty))_rotate(var(--htr))]",
				"data-[trigger=self]:hover:data-[hover=translate]:transform-[translate(var(--htx),var(--hty))]",
				"data-[trigger=self]:hover:data-[hover=rotate]:transform-[rotate(var(--htr))]",
				"data-[trigger=self]:hover:data-[hover=both]:transform-[translate(var(--htx),var(--hty))_rotate(var(--htr))]",
				className,
			)}
			style={
				{
					...(o && {
						"--tx": `${o.x * spread}px`,
						"--ty": `${o.y * spread}px`,
						"--tr": `${o.r}deg`,
						"--htx": `${o.hx * spread}px`,
						"--hty": `${o.hy * spread}px`,
						"--htr": `${o.hr}deg`,
					}),
					...style,
				} as React.CSSProperties
			}
			{...props}
		/>
	)
}

interface ImageFrameGridProps extends React.ComponentProps<"div"> {
	layout?: "grid" | "stack"
}

export function ImageFrameGrid({ className, layout = "grid", ...props }: ImageFrameGridProps) {
	return (
		<div
			data-layout={layout}
			className={cn(
				"group place-items-center",
				"data-[layout=grid]:grid data-[layout=grid]:grid-cols-2 data-[layout=grid]:gap-2",
				"data-[layout=stack]:relative data-[layout=stack]:inline-grid data-[layout=stack]:*:col-start-1 data-[layout=stack]:*:row-start-1",
				className,
			)}
			{...props}
		/>
	)
}
