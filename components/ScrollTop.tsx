"use client";

import { cn } from "@/lib/util";
import { useLenis } from "@studio-freight/react-lenis";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const lenis = useLenis();

  const [currentPositionY, setCurrentPositionY] = useState(0);
  const atTop = currentPositionY <= 50;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentPositionY(window.scrollY);
    });
  });

  return (
    <button
      type="button"
      onClick={() => lenis.scrollTo("top")}
      className={cn(
        "fixed lg:absolute bottom-9 right-9 size-14 grid place-items-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-md cursor-pointer transition-all ease-in-out duration-300 z-50 group",
        {
          "text-neutral-500 cursor-not-allowed rotate-0": atTop,
          "text-neutral-200 -rotate-180": !atTop,
        }
      )}>
      <ArrowDown
        className={cn("size-5 transition-all ease-out duration-200", {
          "group-hover:scale-125": !atTop,
        })}
      />
    </button>
  );
}
