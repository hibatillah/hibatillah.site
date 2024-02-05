"use client";

import { useRouter } from "next/navigation";

export default function Menu({
  name,
}: {
  name: "Projects" | "Works" | "Educations";
}) {
  const router = useRouter();
  const href = "#" + name.toLowerCase();

  return (
    <button
      id={name}
      type="button"
      onClick={() => router.push(href)}
      className="flex items-center gap-3 py-2 text-neutral-400 [:is(&:hover,&:focus-within)]:text-neutral-100 cursor-pointer group select-none overflow-hidden before:text-xs before:[counter-increment:nav] before:content-['0'counter(nav)]">
      <div className="w-5 h-px rounded-full bg-neutral-400 group-[:is(:hover,:focus-within)]:w-11 group-[:is(:hover,:focus-within)]:bg-neutral-100 transition-all ease-in-out duration-300" />
      <div className="text-xs uppercase tracking-widest">{name}</div>
    </button>
  );
}
