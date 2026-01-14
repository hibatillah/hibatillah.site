import { cn } from "@/lib/utils"
import AboutSection from "./_components/about"
import ExperienceSection from "./_components/experience"
import FeaturedSection from "./_components/featured"

export default function Page() {
	return (
		<div
			className={cn(
				"space-y-6 *:[section]:space-y-2",
				"**:data-[slot=section-title]:font-mono! **:data-[slot=section-title]:text-xs **:data-[slot=section-title]:tracking-wider **:data-[slot=section-title]:text-muted-foreground **:data-[slot=section-title]:uppercase",
			)}
		>
			<AboutSection />
			<ExperienceSection />
			<FeaturedSection />
		</div>
	)
}
