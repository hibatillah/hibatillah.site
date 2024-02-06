"use client";

import { useLenis } from "@studio-freight/react-lenis";

export default function Menu({
  name,
}: {
  name: "Projects" | "Works" | "Educations";
}) {
  const lenis = useLenis();
  const href: string = "#" + name.toLowerCase();

  return (
    <button
      id={name}
      type="button"
      onClick={() => lenis.scrollTo(href, { offset: -100 })}
      className="flex items-center gap-3 py-2 text-neutral-400 [:is(&:hover,&:focus-within)]:text-neutral-100 cursor-pointer group select-none overflow-hidden before:text-xs before:[counter-increment:nav] before:content-['0'counter(nav)]">
      <div className="w-5 h-px rounded-full bg-neutral-400 group-[:is(:hover,:focus-within)]:w-11 group-[:is(:hover,:focus-within)]:bg-neutral-100 transition-all ease-in-out duration-300" />
      <div className="text-sm lg:text-xs uppercase tracking-widest">{name}</div>
    </button>
  );
}
