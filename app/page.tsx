import projects from "@/assets/data/project.json";
import recent from "@/assets/projects/indogrosir.webp";
import { ExperienceCard, ProjectCard } from "@/components/Card";
import {
  BookMarked,
  Braces,
  Code,
  Crop,
  Dribbble,
  Figma,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  PanelsTopLeft,
} from "lucide-react";
import { Stack } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 h-dvh space-y-28 antialiased">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1 py-12 h-dvh flex flex-col gap-24">
          <Link href="/">
            <p className="text-neutral-400">M. Hibatillah Hasanin</p>
          </Link>
          <h1 className="text-3xl/snug text-neutral-300 font-medium text-balance relative after:content-[url(../assets/gradient.svg)] after:absolute after:left-0 after:-bottom-1 after:w-40 after:h-1 after:object-contain">
            Interested and Passionate in FrontEnd Development and love to
            Designing <br /> Turn Design into System with Code
          </h1>
          <ul className="mt-auto flex items-center gap-2.5">
            <li>
              <Link href="https://github.com/hibatillah">
                <Github size={20} className="text-neutral-500" />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/hibatillahhabib">
                <Linkedin size={20} className="text-blue-600" />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/hibat.illah">
                <Instagram size={20} className="text-indigo-600" />
              </Link>
            </li>
            <li>
              <Link href="https://figma.com/@hibatillah">
                <Figma size={20} className="text-teal-600" />
              </Link>
            </li>
            <li>
              <Link href="https://dribbble.com/hibatillah">
                <Dribbble size={20} className="text-rose-600" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 max-h-dvh pt-12 pb-16 overflow-y-scroll">
          <div className="space-y-8">
            <p className="sticky top-0 mb-16 text-neutral-400 text-end">
              Pekanbaru, Indonesia
            </p>

            <section
              id="featured"
              className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-1 p-5 rounded-xl bg-glass space-y-2">
                <Braces size={20} className="text-blue-600" />
                <h3>Front-End Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente sit illo suscipit repellendus, reprehenderit quam.
                </p>
              </div>

              <div className="col-span-1 lg:row-start-2 p-5 rounded-xl bg-glass space-y-2">
                <Crop size={20} className="text-indigo-600" />
                <h3>UI Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente sit illo suscipit repellendus, reprehenderit quam.
                </p>
              </div>

              <Link
                href="/projects"
                className="col-span-1 row-span-2 lg:col-start-2">
                <div className="p-5 rounded-xl bg-glass flex flex-col gap-5">
                  <div className="flex-none space-y-2">
                    <PanelsTopLeft size={20} className="text-teal-600" />
                    <h3>Portfolio</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente sit illo suscipit repellendus, reprehenderit
                      quam.
                    </p>
                  </div>
                  <div className="grow rounded-lg border border-white/5 brightness-75 overflow-hidden">
                    <Image
                      src={recent}
                      alt="Recent Project"
                      placeholder="blur"
                      className="select-none pointer-events-none"
                    />
                  </div>
                </div>
              </Link>
            </section>

            <section id="projects" className="space-y-5">
              <h2>Projects</h2>
              {projects?.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  source={project.source}
                  live={project.live}
                  date={project.date}
                  formattedDate={project.formattedDate}
                  image={project.image}
                  stack={project.stack as Stack}
                />
              ))}
            </section>

            <section id="work" className="space-y-4">
              <h2>Work Experience</h2>
              <ExperienceCard
                title="Front-End Javascript Developer Internship"
                subtitle="BPPK Kementrian Keuangan"
                date="Feb - Jun 2024"
                icon={<Code size={16} className="text-teal-600" />}
              />
            </section>

            <section id="education" className="space-y-4">
              <h2>Education</h2>
              <ExperienceCard
                title="Politeknik Caltex Riau"
                subtitle="B.A.Sc in Information Systems"
                date="Sep 2021 - Present"
                icon={<GraduationCap size={20} className="text-indigo-600" />}
              />
              <ExperienceCard
                title="SMA IT Imam Syafi'i 2 Pekanbaru"
                subtitle="High School in Science"
                date="Jul 2018 - May 2021"
                icon={<BookMarked size={16} className="text-blue-600" />}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
