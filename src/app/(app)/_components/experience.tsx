import { TextLink } from "@/components/text-link"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import experiences from "@/contents/experience.json"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

export default function ExperienceSection() {
	return (
		<section>
			<h2 className="font-mono! text-xs tracking-widest text-muted-foreground uppercase">
				Experience
			</h2>

			<Card className="p-0">
				<CardContent className="relative grid grid-cols-1 gap-0 p-0 md:grid-cols-2">
					{experiences.map((item, index) => (
						<div key={index} className="flex flex-col gap-4 p-5">
							<div className="flex items-center gap-3">
								<Image
									src={item.icon}
									alt={item.company}
									width={1000}
									height={1000}
									placeholder="blur"
									blurDataURL={item.icon}
									className="pointer-events-none h-8 w-auto max-w-20 object-contain"
								/>
								<div className="flex flex-col gap-px">
									<TextLink
										href={`/experience/${item.slug}`}
										className="group hover:text-current focus-visible:text-current"
										noUnderline
									>
										<h3 className="inline text-base/snug">{item.title}</h3>
										<ArrowRightIcon className="ms-1 mb-1.5 inline size-3 stroke-2 duration-200 motion-safe:transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />
									</TextLink>
									<p className="text-sm/snug">{item.company}</p>
								</div>
							</div>

							<p className="text-sm">{item.description}</p>
						</div>
					))}
					<Separator className="absolute start-1/2 top-1/2 h-px! w-9/10! -translate-1/2 md:h-3/4! md:w-px!" />
				</CardContent>
			</Card>
		</section>
	)
}
