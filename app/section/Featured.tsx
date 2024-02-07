import poster from "@/assets/poster.webp";
import { Braces, Crop, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <section id="featured" className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Link
        target="_blank"
        href="https://github.com/hibatillah"
        className="col-span-1">
        <div className="h-full p-5 rounded-xl bg-glass space-y-2 group">
          <Braces size={20} className="text-blue-600" />
          <div className="flex items-center gap-2">
            <h3 className="cursor-pointer">Front End Development</h3>
            <ExternalLink
              size={14}
              className="block lg:hidden text-neutral-400 lg:group-hover:block"
            />
          </div>
          <p className="cursor-pointer">
            Interested in creating user interfaces with code that is attractive
            and easy for users to use and responsive for web and mobile screens.
          </p>
        </div>
      </Link>

      <Link
        target="_blank"
        href="https://dribbble.com/hibatillah"
        className="col-span-1 lg:row-start-2">
        <div className="h-full p-5 rounded-xl bg-glass space-y-2 group">
          <Crop size={20} className="text-indigo-600" />
          <div className="flex items-center gap-2">
            <h3 className="cursor-pointer">UI Design</h3>
            <ExternalLink
              size={14}
              className="block lg:hidden text-neutral-400 lg:group-hover:block"
            />
          </div>
          <p className="cursor-pointer">
            Process of designing a user interface to create an engaging, and
            efficient user experience by considering the visual, functional, and
            interactive aspects.
          </p>
        </div>
      </Link>

      <Link
        target="_blank"
        href="https://read.cv/hibatillah"
        className="col-span-1 row-span-2 row-start-1 md:col-start-2">
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
              <h3 className="cursor-pointer">Read.cv</h3>
              <ExternalLink
                size={14}
                className="block lg:hidden text-neutral-400 lg:group-hover:block"
              />
            </div>
            <p className="cursor-pointer">
              Student majoring in Information Systems. Interested in web
              development especially in Frontend and create UI Designs in web
              and mobile.
            </p>
          </div>
          <div className="grow rounded-lg border border-white/10 brightness-75 overflow-hidden">
            <Image
              src={poster}
              alt="Portfolio"
              placeholder="blur"
              className="size-full object-cover object-center group-hover:scale-110 select-none pointer-events-none transition-all ease-out duration-300"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
