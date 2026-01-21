import { TextLink } from "@/components/text-link"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { staggerItem } from "@/lib/animations"
import { Education, Experience } from "@/lib/types"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

export default function ExperienceSection({
	experience,
	education,
}: {
	experience: Experience
	education: Education
}) {
	return (
		<section>
			<Card variants={staggerItem} className="p-0">
				<CardContent className="relative grid grid-cols-1 gap-0 p-0 md:grid-cols-2">
					<div className="flex flex-col gap-4 p-5">
						<h2 className="font-mono! text-xs tracking-widest text-muted-foreground uppercase">
							Experience
						</h2>

						<div className="flex items-center gap-3">
							<div className="size-7">
								<Image
									src={experience.icon}
									alt={experience.company}
									width={1000}
									height={1000}
									placeholder="blur"
									blurDataURL={experience.icon}
									className="pointer-events-none size-full object-contain"
								/>
							</div>
							<div className="flex flex-col gap-px">
								<TextLink
									href={`/experience/${experience.slug}`}
									underline="hover"
									className="group flex items-center gap-1 hover:text-current focus-visible:text-current"
								>
									<h3 className="inline text-base/snug">{experience.title}</h3>
									<ArrowRightIcon className="duration-200 md:hidden!" />
								</TextLink>
								<p className="text-sm/snug">{experience.company}</p>
							</div>
						</div>

						<p className="text-sm">{experience.description}</p>
					</div>

					<div className="flex flex-col gap-4 p-5">
						<h2 className="font-mono! text-xs tracking-widest text-muted-foreground uppercase">
							Education
						</h2>

						<div className="flex items-center gap-3">
							<Image
								src={education.icon}
								alt={education.college}
								width={1000}
								height={1000}
								placeholder="blur"
								blurDataURL={education.icon}
								className="pointer-events-none h-7 w-auto max-w-20 object-contain"
							/>
							<div className="flex flex-col gap-px">
								<TextLink
									href={`/education/${education.slug}`}
									underline="hover"
									className="group flex items-center gap-1 hover:text-current focus-visible:text-current"
								>
									<h3 className="inline text-base/snug">{education.degree}</h3>
									<ArrowRightIcon className="duration-200 md:hidden!" />
								</TextLink>
								<p className="text-sm/snug">{education.college}</p>
							</div>
						</div>

						<p className="text-sm">{education.description}</p>
					</div>

					<Separator className="absolute start-1/2 top-1/2 h-px! w-9/10! -translate-1/2 md:h-3/4! md:w-px!" />
				</CardContent>
			</Card>
		</section>
	)
}
