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

export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.05,
		},
	},
}

export const staggerItem = {
	hidden: {
		opacity: 0,
		y: 10,
		filter: "blur(4px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.4,
		},
	},
}
