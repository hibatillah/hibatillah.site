import * as tech from "@/assets/icons";
import * as thumbnail from "@/assets/projects";
import { Experience, Project } from "@/lib/types";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ data }: { data: Project }) {
  const { image, title, description, date, source, live, stack } = data;

  const utcDate = date.toUTCString().split(" ");
  const formattedDate = `${utcDate[2]} ${utcDate[1]}, ${utcDate[3]}`;

  return (
    <div className="p-4 bg-glass rounded-xl flex items-stretch gap-4">
      <div className="flex-none w-44 aspect-square bg-neutral-800/60 border border-white/5 rounded-lg overflow-hidden">
        <Image
          src={thumbnail[image as keyof typeof thumbnail]}
          alt={title}
          placeholder="blur"
          className="size-full object-cover object-left brightness-75 select-none pointer-events-none"
        />
      </div>
      <div className="grow flex flex-col">
        <abbr title={title} className="[text-decoration:unset]">
          <h3 className="text-neutral-300 font-medium line-clamp-1">{title}</h3>
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
                className="size-6 object-contain brightness-75 select-none pointer-events-none"
              />
            </abbr>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between">
          <time
            dateTime={date.toISOString().split("T")[0]}
            className="text-neutral-500 text-sm">
            {formattedDate}
          </time>
          <div className="flex items-center gap-2">
            {source && (
              <Link
                href={source}
                target="_blank"
                className="flex items-center gap-2 py-2 px-6 rounded-full bg-neutral-800/50 text-sm text-neutral-300 hover:bg-neutral-800 active:bg-neutral-900/80 select-none">
                <Github size={14} className="animate-pulse" /> Source
              </Link>
            )}
            {live && (
              <Link
                href={live}
                target="_blank"
                className="flex items-center gap-3 py-2 px-5 rounded-full bg-neutral-800/50 text-sm text-neutral-300 hover:bg-neutral-800 active:bg-neutral-900/80 select-none">
                Live
                <span className="size-2 rounded-full bg-blue-600 relative before:content-[''] before:absolute before:-inset-1 before:bg-blue-800 before:rounded-full before:-z-10 before:animate-ping" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCard({ data }: { data: Experience }) {
  const { icon, title, subtitle, date } = data;

  return (
    <div className="py-3 ps-3 pe-3 lg:pe-8 bg-glass rounded-full flex items-center gap-3">
      <div className="size-12 flex justify-center items-center bg-neutral-800/60 border border-white/5 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-neutral-300 font-medium line-clamp-1">{title}</h3>
        <time className="text-neutral-600 text-sm">{date}</time>
      </div>
      <p className="ms-auto text-neutral-500">{subtitle}</p>
    </div>
  );
}
