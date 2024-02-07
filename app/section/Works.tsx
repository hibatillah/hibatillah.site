import { works } from "@/assets/data/experience";
import { ExperienceCard } from "@/components/Card";

export default function Works() {
  return (
    <section id="works" className="space-y-4">
      <h2 className="text-xs tracking-widest uppercase">Work Experiences</h2>
      <ul className="space-y-4">
        {works?.map((work, index) => (
          <ExperienceCard key={index} data={work} />
        ))}
      </ul>
    </section>
  );
}
