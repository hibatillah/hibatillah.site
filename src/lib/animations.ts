import { HTMLMotionProps, Transition } from "motion/react"

export const slideIn: Transition = {
	type: "spring",
	bounce: 0.2,
	duration: 0.6,
}

export const fadeSlideUp: HTMLMotionProps<"div"> = {
	transition: slideIn,
	initial: { opacity: 0, y: 5 },
	animate: { opacity: 1, y: 0 },
}
