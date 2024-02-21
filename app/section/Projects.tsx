import projects from "@/assets/data/project.json";
import { ProjectCard } from "@/components/Card";
import { Stack } from "@/lib/types";

export default function Projects() {
  return (
    <section id="projects" className="space-y-5 scroll-mt-28">
      <h2 className="text-xs tracking-widest uppercase">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            data={{
              ...project,
              stack: project.stack as Stack,
            }}
          />
        ))}
      </ul>
    </section>
  );
}
