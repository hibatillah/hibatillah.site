import poster from "@/assets/poster.webp";
import { cn, isTouchScreen } from "@/lib/util";
import { Braces, Crop, ExternalLink, MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  const isTouched = isTouchScreen();

  return (
    <section id="featured" className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="col-span-1 h-52 md:h-48  p-5 rounded-xl bg-glass space-y-2 relative group overflow-hidden">
        <div className="w-fit flex items-center gap-2">
          <Braces size={20} className="text-blue-600" />
          <h3 className="line-clamp-1">Front End Development</h3>
        </div>
        <div className="w-96 h-full rounded-lg bg-glass border border-neutral-700/80 shadow-[-8px_16px_10px_rgb(0_0_0)] translate-x-4 translate-y-4 overflow-hidden [mask:linear-gradient(90deg,white_60%,transparent)] md:[mask:linear-gradient(90deg,white_20%,transparent)] transition-all ease-out duration-300">
          <div className="border-b border-neutral-700/80">
            <div className="inline-block px-3 py-2 bg-neutral-900/50 text-xs text-yellow-400 border-r border-neutral-700/80">
              main.js
            </div>
            <div className="inline-block px-3 py-2 bg-neutral-900/20 text-xs text-orange-500 border-r border-neutral-700/80">
              index.html
            </div>
          </div>
          <pre className="size-full p-3 bg-neutral-900/50">
            <code className="text-xs font-mono">
              <HighlightedCode />
            </code>
          </pre>
        </div>
        <MousePointerClick
          size={14}
          className={cn(
            "text-white absolute top-[43%] left-1/4  md:left-1/2 transition-all ease-in-out duration-500 select-none",
            {
              "md:group-hover:left-1/4": !isTouched,
            }
          )}
        />
      </div>

      <div className="col-span-1 h-52 md:h-48 lg:row-start-2 relative  p-5 rounded-xl bg-glass space-y-2 group overflow-hidden">
        <div className="w-fit flex items-center gap-2">
          <Crop size={20} className="text-teal-600" />
          <h3 className="line-clamp-1">UI Design</h3>
        </div>
        <div className="absolute top-16 left-14 md:top-14 md:left-12 w-full h-full rounded-lg px-5 py-4 space-y-3 bg-neutral-900/50 border border-neutral-800 group-hover:border-neutral-700/80 shadow-[-12px_16px_7px_rgb(0_0_0/0.5)] group-hover:shadow-[-16px_24px_10px_rgb(0_0_0/0.5)] skew-x-[30deg] -skew-y-[16deg] transition-all ease-out duration-300">
          <p className="text-neutral-400/80">
            Hey there 👋, down here. Want to see something cool?
          </p>
          <button className="w-full px-6 py-1 rounded-md bg-blue-800 text-sm text-neutral-200 tracking-wider hover:bg-blue-700 hover:text-white active:bg-blue-900">
            Sign Up
          </button>
          <button className="w-full px-6 py-1 rounded-md border border-blue-800 text-sm text-neutral-200 tracking-wide hover:bg-blue-800 hover:text-white active:bg-blue-900">
            Login
          </button>
        </div>
      </div>

      <Link
        target="_blank"
        href="https://read.cv/hibatillah"
        className="col-span-1 row-span-2 row-start-1 col-start-1">
        <div className="h-full p-5 rounded-xl bg-glass flex flex-col gap-5 group">
          <div className="flex-none space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 object-contain text-indigo-500"
              viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51ZM178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27ZM83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28Zm-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27Z"
              />
            </svg>
            <div className="flex items-center gap-2">
              <h3 className="line-clamp-1 cursor-pointer">Resume</h3>
              <ExternalLink
                size={14}
                className={cn("block text-neutral-400", {
                  "lg:hidden lg:group-hover:block": !isTouched,
                })}
              />
            </div>
            <p className="cursor-pointer">
              Student majoring in Information Systems. Interested in web
              development especially in Frontend and create various UI Designs
              in web and mobile.
            </p>
          </div>
          <div className="grow rounded-lg border border-white/10 brightness-75 group-hover:brightness-[.8] overflow-hidden">
            <Image
              src={poster}
              alt="Portfolio"
              placeholder="blur"
              className="size-full object-cover object-center motion-safe:group-hover:scale-110 select-none pointer-events-none transition-all ease-out duration-300"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}

const HighlightedCode = () => {
  return (
    <>
      <span className="text-red-600">const</span>{" "}
      <span className="text-blue-600">button</span>{" "}
      <span className="text-red-600">=</span>{" "}
      <span className="text-blue-600">document</span>.
      <span className="text-purple-600">querySelector</span>
      <span className="text-green-600">{"("}</span>
      <span className="text-teal-600">{`"button#signup"`}</span>;
      <span className="text-green-600">{")"}</span>
      <br />
      <span className="text-blue-600">button</span>.
      <span className="text-blue-600">classList</span>.
      <span className="text-purple-600">add</span>
      <span className="text-green-600">{"("}</span>
      <span className="text-teal-600">{`"bg-blue-500 text-white"`}</span>
      <span className="text-green-600">{")"}</span>;
      <br />
      <span className="text-blue-600">button</span>.
      <span className="text-purple-600">innerText</span>{" "}
      <span className="text-red-600">=</span>{" "}
      <span className="text-teal-600">{`"Sign Up"`}</span>;
    </>
  );
};
