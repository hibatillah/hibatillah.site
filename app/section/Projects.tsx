import projects from "@/assets/data/project";
import { ProjectCard } from "@/components/Card";
import { Stack } from "@/lib/types";

export default function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 scroll-mt-28">
      <h2 className="md:col-span-2 lg:col-span-1 text-xs tracking-widest uppercase">
        Projects
      </h2>
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
