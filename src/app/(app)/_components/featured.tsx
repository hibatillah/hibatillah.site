"use client"

import { ImageTheme } from "@/components/image-theme"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import projects from "@/contents/projects.json"
import { cn, getSafeSrc } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

export default function FeaturedSection() {
	const [hoveredId, setHoveredId] = useState<number | null>(null)
	const [openId, setOpenId] = useState(0)

	const featured = projects.filter((item) => item.featured)
	const activeProject = featured[openId]

	return (
		<section>
			<Card className="grid grid-cols-1 gap-0 py-0 md:h-100 md:grid-cols-[calc(var(--spacing)*90)_1fr] md:grid-rows-3">
				<CardHeader className="order-1 px-5 py-5 md:h-fit">
					<h3 className="font-mono! text-xs tracking-widest text-muted-foreground uppercase">
						Featured Projects
					</h3>
					<CardTitle>
						<h2 className="text-xl/snug md:text-xl/relaxed">
							Exploring web architecture through practical application
						</h2>
					</CardTitle>
				</CardHeader>

				<CardContent
					className="order-3 flex flex-col gap-1 px-2 py-2 md:order-2 md:col-start-1 md:row-span-2 md:row-start-2 md:mt-auto md:h-fit"
					onMouseLeave={() => setHoveredId(null)}
				>
					{featured.map((item, index) => {
						const isOpen = openId === index
						const isHovered = hoveredId === index

						return (
							<motion.div
								layout
								key={index}
								role="button"
								tabIndex={0}
								aria-expanded={isOpen}
								className={cn(
									"relative isolate overflow-hidden rounded-md px-3 py-2 focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
									{
										"cursor-pointer": !isOpen,
									},
								)}
								onClick={() => setOpenId(index)}
								onMouseEnter={() => setHoveredId(index)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault()
										setOpenId(index)
									}
								}}
							>
								<motion.div
									layout="position"
									className="z-10 flex items-center justify-between gap-1 text-foreground"
								>
									<h4 className="text-pretty">{item.title}</h4>
									<ChevronDownIcon
										className={cn("size-4 duration-200 motion-safe:transition-transform", {
											"-rotate-90": !isOpen,
										})}
									/>
								</motion.div>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											key="content"
											initial="collapsed"
											animate="open"
											exit="collapsed"
											variants={{
												open: { opacity: 1, height: "auto" },
												collapsed: { opacity: 0, height: 0 },
											}}
											transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
										>
											<p className="z-10 pt-1 text-sm will-change-transform">{item.description}</p>
										</motion.div>
									)}
								</AnimatePresence>
								{isHovered && (
									<motion.div
										layoutId="featured-hover"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
										className="absolute inset-0 -z-10 rounded-md bg-muted"
									/>
								)}
							</motion.div>
						)
					})}
				</CardContent>

				<div className="relative order-2 h-60 w-full overflow-hidden md:order-3 md:row-span-3 md:h-full">
					<Image
						src="/images/featured-background.webp"
						alt=""
						width={1200}
						height={1200}
						placeholder="blur"
						blurDataURL={getSafeSrc(activeProject.thumbnail)}
						className="pointer-events-none size-full object-cover select-none dark:brightness-90"
						priority
					/>
					<AnimatePresence mode="popLayout">
						{activeProject && (
							<motion.div
								key={activeProject.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="absolute start-10 top-10 w-full origin-top-left overflow-hidden rounded-tl-lg shadow-2xl md:start-16 md:top-16"
							>
								<ImageTheme
									src={activeProject.thumbnail}
									alt={activeProject.title}
									width={1800}
									height={1800}
									className="pointer-events-none size-full bg-top-left dark:brightness-90"
									priority
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</Card>
		</section>
	)
}
