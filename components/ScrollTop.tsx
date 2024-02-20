"use client";

import { cn } from "@/lib/util";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [currentPositionY, setCurrentPositionY] = useState(0);
  const disableToTop = currentPositionY <= 300;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentPositionY(window.scrollY);
    });
  });

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed lg:absolute bottom-9 right-9 size-14 grid place-items-center rounded-full text-neutral-200 -rotate-180 border border-white/10 bg-black/30 backdrop-blur-md shadow-md cursor-pointer hover:scale-90 transition-all ease-in-out duration-300 z-50 group",
        { "text-neutral-500 cursor-not-allowed rotate-0": disableToTop }
      )}>
      <ArrowDown className="size-5 group-enabled:group-hover:scale-125 transition-all ease-out duration-200 motion-reduce:transition-none" />
    </button>
  );
}
