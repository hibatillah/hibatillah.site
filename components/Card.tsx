import * as tech from "@/assets/icons";
import * as thumbnail from "@/assets/projects";
import { Experience, Project } from "@/lib/types";
import { BookMarked, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 py-2 px-5 rounded-full bg-neutral-800/50 border border-white/5 text-sm text-neutral-300 hover:bg-neutral-800 active:bg-neutral-900/80 select-none">
      {children}
    </Link>
  );
}

export function ProjectCard({ data }: { data: Project }) {
  const { image, title, description, date, source, live, stack, docs } = data;

  return (
    <li className="min-h-[420px] lg:min-h-fit p-4 bg-glass rounded-xl flex flex-col lg:flex-row items-stretch gap-4 group motion-safe:animate-fade-in-out motion-safe:[animation-timeline:view(-50px)] scroll-mt-12">
      <div className="flex-none w-full lg:w-44 aspect-video lg:aspect-square bg-neutral-800/60 border border-white/5 rounded-lg overflow-hidden">
        <Image
          src={thumbnail[image as keyof typeof thumbnail]}
          alt={title}
          placeholder="blur"
          className="size-full object-cover object-left brightness-75 select-none pointer-events-none motion-safe:group-hover:scale-110 transition-all ease-out duration-300"
        />
      </div>
      <div className="grow flex flex-col">
        <abbr title={title} className="[text-decoration:unset]">
          <h3 className="text-neutral-300 font-medium line-clamp-1 select-all">
            {title}
          </h3>
          <p className="mt-1 text-neutral-500 text-sm line-clamp-3">
            {description}
          </p>
        </abbr>
        <div className="flex items-center gap-2 mt-3 p-px">
          {stack?.map((item, index) => (
            <abbr key={index} title={item} className="[text-decoration:unset]">
              <Image
                src={tech[item.toLocaleLowerCase() as keyof typeof tech]}
                alt={item}
                className="size-6 object-contain brightness-90 select-none pointer-events-none"
              />
            </abbr>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between">
          <p className="text-neutral-500 text-sm">{date}</p>
          <div className="flex items-center gap-2.5">
            {source && (
              <LinkButton href={source}>
                <Github size={14} className="motion-safe:animate-pulse" />{" "}
                Source
              </LinkButton>
            )}
            {docs && (
              <LinkButton href={docs}>
                <BookMarked size={14} className="motion-safe:animate-pulse" />{" "}
                Docs
              </LinkButton>
            )}
            {live && (
              <LinkButton href={live}>
                Live
                <span className="size-2 rounded-full bg-blue-600 relative before:content-[''] before:absolute before:-inset-1 before:bg-blue-800 before:rounded-full before:-z-10 before:animate-ping" />
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export function ExperienceCard({
  data,
  type,
}: {
  data: Experience;
  type: "works" | "educations";
}) {
  const { icon, title, subtitle, date } = data;

  const link = {
    works: "https://linkedin.com/in/hibatillahhabib/#experience",
    educations: "https://linkedin.com/in/hibatillahhabib/#education",
  };

  return (
    <li className="py-3 px-4 md:ps-3 md:pe-8 bg-glass rounded-xl md:rounded-full flex items-center gap-4 md:gap-3 motion-safe:animate-fade-in-out motion-safe:[animation-timeline:view(-50px)]">
      <div className="hidden size-12 flex-none md:flex justify-center items-center bg-neutral-800/60 border border-white/5 rounded-full">
        {icon}
      </div>
      <div className="grow">
        <h3 className="text-neutral-300 font-medium line-clamp-1">{title}</h3>
        <p className="md:hidden text-sm text-neutral-500">{subtitle}</p>
        <p className="w-fit text-neutral-600 text-xs md:text-sm">{date}</p>
      </div>
      <p className="hidden md:block ms-auto text-neutral-500 text-end">
        {subtitle}
      </p>
    </li>
  );
}
