import { Educations, Featured, Projects, Works } from "@/app/section";
import Menu from "@/components/Menu";
import ScrollTop from "@/components/ScrollTop";
import Socials from "@/components/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container space-y-28 antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 lg:sticky lg:top-0 py-12 px-6 h-dvh md:h-fit lg:h-dvh 2xl:h-fit flex flex-col gap-24">
          <Link
            href="/"
            className="w-fit h-5 flex flex-col text-sm *:text-neutral-400 overflow-hidden *:cursor-pointer *:transition-all *:ease-out *:duration-300 group">
            <p className="group-hover:-translate-y-5 group-hover:invisible group-hover:opacity-0 before:content-['©'] before:me-1">
              M. Hibatillah Hasanin
            </p>
            <p className="invisible opacity-0 group-hover:-translate-y-5 group-hover:visible group-hover:opacity-100">
              Hibatillah Habib
            </p>
          </Link>

          <div className="relative after:content-[url(../assets/gradient.svg)] after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-1 after:object-contain">
            <h1 className="text-3xl/snug text-neutral-300 font-medium text-balance">
              Interested and Passionate in FrontEnd Development and love to
              Designing <br /> Turn Design into system with Code
            </h1>
          </div>

          <nav className="w-40 my-auto flex flex-col [counter-reset:nav]">
            <Menu name="Projects" />
            <Menu name="Works" />
            <Menu name="Educations" />
          </nav>

          <Socials />
          <ScrollTop />
        </div>

        <div className="col-span-1 px-6 lg:pt-12 pb-24 lg:pb-16 space-y-10">
          <p className="hidden lg:block ms-auto w-fit mb-16 text-neutral-400 text-end">
            Pekanbaru, Indonesia
          </p>

          <Featured />
          <Projects />
          <Works />
          <Educations />
        </div>
      </div>
    </main>
  );
}
