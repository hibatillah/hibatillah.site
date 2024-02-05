import projects from "@/assets/data/project";
import { ProjectCard } from "@/components/Card";
import { Stack } from "@/lib/types";

export default function Projects() {
  return (
    <section id="projects" className="space-y-5 scroll-mt-28">
      <h2 className="text-xs tracking-widest uppercase">Projects</h2>
      {projects?.map((project, index) => (
        <ProjectCard
          key={index}
          data={{
            ...project,
            stack: project.stack as Stack,
          }}
        />
      ))}
    </section>
  );
}
