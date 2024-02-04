import * as tech from "@/assets/icons";
import * as thumbnail from "@/assets/projects";
import { Stack } from "@/lib/types";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  image,
  title,
  description,
  date,
  formattedDate,
  source,
  live,
  stack,
  ...props
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  formattedDate?: string;
  source?: string;
  live?: string;
  stack?: Stack;
}) {
  return (
    <abbr
      className="p-4 bg-glass rounded-xl flex items-stretch gap-4 [text-decoration:unset]"
      title={title}
      {...props}>
      <div className="flex-none w-44 aspect-square bg-neutral-800/60 border border-white/5 rounded-lg overflow-hidden">
        <Image
          src={thumbnail[image as keyof typeof thumbnail]}
          alt={title}
          placeholder="blur"
          className="size-full object-cover object-left brightness-75"
        />
      </div>
      <div className="grow flex flex-col">
        <div>
          <h3 className="text-neutral-300 font-medium line-clamp-1">{title}</h3>
          <p className="mt-1 text-neutral-500 text-sm line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-2 mt-3">
            {stack?.map((item, index) => (
              <Image
                key={index}
                src={tech[item]}
                alt={item}
                className="size-7 object-contain brightness-75"
              />
            ))}
          </div>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <time dateTime={formattedDate} className="text-neutral-500 text-sm">
            {date}
          </time>
          <div className="flex items-center gap-2">
            {source && (
              <Link
                href={source}
                className="flex items-center gap-2 py-2 px-6 rounded-full bg-neutral-800/50 text-sm text-neutral-300 hover:bg-neutral-800">
                <Github size={14} className="animate-pulse" /> Source
              </Link>
            )}
            {live && (
              <Link
                href={live}
                className="flex items-center gap-3 py-2 px-5 rounded-full bg-neutral-800/50 text-sm text-neutral-300 hover:bg-neutral-800">
                <span className="size-2 rounded-full bg-blue-600 relative before:content-[''] before:absolute before:-inset-1 before:bg-blue-800 before:rounded-full before:-z-10 before:animate-ping" />
                Live
              </Link>
            )}
          </div>
        </div>
      </div>
    </abbr>
  );
}

export function ExperienceCard({
  icon,
  title,
  subtitle,
  date,
  ...props
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
}) {
  return (
    <div
      className="py-3 ps-3 pe-3 lg:pe-8 bg-glass rounded-full flex items-center gap-3"
      {...props}>
      <div className="size-12 flex justify-center items-center bg-neutral-800/60 border border-white/5 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-neutral-400 font-medium">{title}</h3>
        <time className="text-neutral-600 text-sm">{date}</time>
      </div>
      <p className="ms-auto text-neutral-500">{subtitle}</p>
    </div>
  );
}
