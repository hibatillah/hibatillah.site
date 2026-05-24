"use client"

import { staggerContainer } from "@/lib/animations"
import { Education, Experience, Project } from "@/lib/types"
import { motion } from "motion/react"
import AboutSection from "./about"
import ExperienceSection from "./experience"
import FeaturedSection from "./featured"
import { RemoteImage } from "@/lib/remote-image"

interface OverviewProps {
	data: {
		experience: Experience
		education: Education
		projects: Project[]
	}
	images: Record<string, RemoteImage>
}

export default function Overview({
	data: { experience, education, projects },
	images,
}: OverviewProps) {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			className="space-y-5 max-lg:px-4"
		>
			<AboutSection image={images.about} />
			<ExperienceSection experience={experience} education={education} />
			<FeaturedSection projects={projects} backgroundImage={images.featured} />
		</motion.div>
	)
}
