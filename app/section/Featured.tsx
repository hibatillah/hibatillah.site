import poster from "@/assets/poster.webp";
import { cn, isTouchScreen } from "@/lib/util";
import { Braces, Crop, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  const isTouched = isTouchScreen();

  return (
    <section id="featured" className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Link
        target="_blank"
        href="https://github.com/hibatillah"
        className="col-span-1 h-48 max-h-48">
        <div className="h-full p-5 rounded-xl bg-glass space-y-2 relative group overflow-hidden">
          <div className="w-fit flex items-center gap-2">
            <Braces size={20} className="text-blue-600" />
            <h3 className="line-clamp-1 cursor-pointer">
              Front End Development
            </h3>
            <ExternalLink
              size={14}
              className={cn("block text-neutral-400", {
                "lg:hidden lg:group-hover:block": !isTouched,
              })}
            />
          </div>
          <div className="absolute -bottom-7 -right-8 w-full h-4/5 rounded-lg bg-glass border border-neutral-700/80 shadow-xl overflow-hidden">
            <div className="border-b border-neutral-700/80">
              <div className="w-fit px-3 py-2 bg-neutral-900/50 text-xs text-yellow-400 border-r border-neutral-700/80">
                main.js
              </div>
            </div>
            <pre className="size-full p-3 bg-neutral-900/50">
              <code className="text-xs font-mono">
                <HighlightedCode />
              </code>
            </pre>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="size-2 fill-white absolute bottom-6 right-[60%] group-hover:bottom-12 transition-all ease-out duration-300 select-none">
            <path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z" />
          </svg>
        </div>
      </Link>

      <Link
        target="_blank"
        href="https://dribbble.com/hibatillah"
        className="col-span-1 h-48 max-h-48 lg:row-start-2 relative overflow-hidden">
        <div className="h-full p-5 rounded-xl bg-glass space-y-2 group overflow-hidden">
          <div className="w-fit flex items-center gap-2">
            <Crop size={20} className="text-indigo-600" />
            <h3 className="line-clamp-1 cursor-pointer">UI Design</h3>
            <ExternalLink
              size={14}
              className={cn("block text-neutral-400", {
                "lg:hidden lg:group-hover:block": !isTouched,
              })}
            />
          </div>
          <div className="absolute -bottom-5 -right-10 w-full rounded-lg px-5 py-4 space-y-3 bg-neutral-900/40 border border-neutral-800 group-hover:border-neutral-700/80 shadow-xl skew-x-[30deg] -skew-y-[16deg] group/card">
            <p className="group-hover/card:text-neutral-400">
              Hey there 👋, down here. Want to see something cool?
            </p>
            <button className="w-full px-6 py-1 rounded-md bg-blue-800 text-sm text-neutral-300 tracking-wider hover:bg-blue-700 hover:text-white active:bg-blue-900">
              Sign Up
            </button>
            <button className="w-full px-6 py-1 rounded-md border border-blue-800 text-sm text-neutral-300 tracking-wide hover:bg-blue-800 hover:text-white active:bg-blue-900">
              Login
            </button>
          </div>
        </div>
      </Link>

      <Link
        target="_blank"
        href="https://read.cv/hibatillah"
        className="col-span-1 row-span-2 row-start-1 col-start-1">
        <div className="h-full p-5 rounded-xl bg-glass flex flex-col gap-5 group">
          <div className="flex-none space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 object-contain text-teal-600"
              viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51ZM178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27ZM83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28Zm-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27Z"
              />
            </svg>
            <div className="flex items-center gap-2">
              <h3 className="line-clamp-1 cursor-pointer">Read.cv</h3>
              <ExternalLink
                size={14}
                className={cn("block text-neutral-400", {
                  "lg:hidden lg:group-hover:block": !isTouched,
                })}
              />
            </div>
            <p className="cursor-pointer">
              Student majoring in Information Systems. Interested in web
              development especially in Frontend and create UI Designs in web
              and mobile.
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
      <span className="text-red-500">const</span>{" "}
      <span className="text-blue-500">button</span>{" "}
      <span className="text-red-500">=</span>{" "}
      <span className="text-blue-500">document</span>.
      <span className="text-purple-500">querySelector</span>
      <span className="text-green-500">{"("}</span>
      <span className="text-sky-400">{`"button#signup"`}</span>;
      <span className="text-green-500">{")"}</span>
      <br />
      <span className="text-blue-500">button</span>.
      <span className="text-blue-500">classList</span>.
      <span className="text-purple-500">add</span>
      <span className="text-green-500">{"("}</span>
      <span className="text-sky-400">{`"bg-blue-500 text-white"`}</span>
      <span className="text-green-500">{")"}</span>;
      <br />
      <span className="text-blue-500">button</span>.
      <span className="text-purple-500">innerText</span>{" "}
      <span className="text-red-500">=</span>{" "}
      <span className="text-sky-400">{`"Sign Up"`}</span>;
    </>
  );
};
