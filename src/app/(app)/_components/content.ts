import { StackOffset } from "@/components/image-frame"
import { StaticImageData } from "next/image"

import ministry3 from "@/static/exp/ministry/card.webp"
import ministry1 from "@/static/exp/ministry/group.webp"
import ministry2 from "@/static/exp/ministry/intern.webp"

import pcr1 from "@/static/edu/pcr/1.jpg"
import pcr2 from "@/static/edu/pcr/2.jpg"
import pcr3 from "@/static/edu/pcr/3.jpg"

import furaya from "@/static/project/furaya-hotel/thumbnail.webp"
import massbeat from "@/static/project/massbeat/thumbnail.webp"
import klc from "@/static/project/klc-room/thumbnail.webp"
import yemeni from "@/static/project/yemeni-music/thumbnail.webp"

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
		url: "frontend-ministry-finance",
		images: [
			{ src: ministry3, offsets: "bl" },
			{ src: ministry2, offsets: "tr" },
			{ src: ministry1, offsets: "c" },
		],
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

export const projects: Project[] = [
	{
		title: "Furaya Hotel Management",
		description: "Modernizing a legacy hotel management system.",
		year: "2025",
		url: "furaya-hotel-management",
		images: [{ src: furaya, offsets: "c" }],
	},
	{
		title: "KLC Room",
		description: "Ministry's Unit's room management system.",
		year: "2024",
		url: "klc-room",
		images: [{ src: klc, offsets: "c" }],
	},
	{
		title: "Yemeni Music Classification",
		description: "Deep learning audio classification.",
		year: "2024",
		url: "yemeni-music-classification",
		images: [{ src: yemeni, offsets: "c" }],
	},
	{
		title: "MassBeat",
		description: "A user-centered home workout platform",
		year: "2023",
		url: "massbeat",
		images: [{ src: massbeat, offsets: "c" }],
	},
]
