import { educations } from "@/assets/data/experience";
import { ExperienceCard } from "@/components/Card";

export default function Educations() {
  return (
    <section id="educations" className="space-y-4">
      <h2 className="text-xs tracking-widest uppercase">Educations</h2>
      <ul className="space-y-4">
        {educations?.map((education, index) => (
          <ExperienceCard key={index} data={education} />
        ))}
      </ul>
    </section>
  );
}
