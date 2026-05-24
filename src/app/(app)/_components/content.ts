import { StackOffset } from "@/components/image-frame"
import { StaticImageData } from "next/image"

import bg from "@/static/bg.jpg"

import ministry1 from "@/static/experiences/ministry/1.jpg"
import ministry2 from "@/static/experiences/ministry/2.jpg"
import ministry3 from "@/static/experiences/ministry/3.jpg"

import pcr1 from "@/static/educations/pcr/1.jpg"
import pcr2 from "@/static/educations/pcr/2.jpg"
import pcr3 from "@/static/educations/pcr/3.jpg"

export interface Thumbnail {
	src: StaticImageData | string
	offsets: StackOffset
}

export interface Work {
	role: string
	company: string
	year: string
	url: string
	images: Thumbnail[]
}

export interface Education {
	campus: string
	degree: string
	year: string
	url: string
	images: Thumbnail[]
}

export interface Project {
	title: string
	description: string
	year: string
	url: string
	images: Thumbnail[]
}

export const works: Work[] = [
	{
		role: "Frontend Developer",
		company: "Ministry Finance Indonesia",
		year: "2024",
		url: "frontend-intern-ministry-finance",
		images: [
			{ src: ministry3, offsets: "bl" },
			{ src: ministry2, offsets: "tr" },
			{ src: ministry1, offsets: "c" },
		],
	},
]

export const projects: Project[] = [
	{
		title: "Furaya Hotel",
		description: "Front desk hotel management.",
		year: "2025",
		url: "frontend-intern-ministry-finance",
		images: [{ src: bg, offsets: "c" }],
	},
	{
		title: "Ministry Finance Unit Room",
		description: "Ministry's Unit's room management.",
		year: "2024",
		url: "frontend-intern-ministry-finance",
		images: [{ src: bg, offsets: "c" }],
	},
	{
		title: "Yemeni Music Classification",
		description: "Deep learning audio classification.",
		year: "2024",
		url: "frontend-intern-ministry-finance",
		images: [{ src: bg, offsets: "c" }],
	},
	{
		title: "MassBeat",
		description: "Workout and trainer consultation app",
		year: "2023",
		url: "frontend-intern-ministry-finance",
		images: [{ src: bg, offsets: "c" }],
	},
]

export const educations: Education[] = [
	{
		campus: "Politeknik Caltex Riau",
		degree: "B.A.Sc in Information Systems",
		year: "2025",
		url: "politeknik-caltex-riau",
		images: [
			{ src: pcr3, offsets: "r" },
			{ src: pcr2, offsets: "tl" },
			{ src: pcr1, offsets: "c" },
		],
	},
]
