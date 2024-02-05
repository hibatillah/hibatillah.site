import { Educations, Featured, Projects, Works } from "@/app/section";
import Menu from "@/components/Menu";
import Socials from "@/components/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container space-y-28 antialiased">
      <main className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 sticky top-0 py-12 px-5 h-dvh flex flex-col gap-24">
          <Link href="/" className="w-fit">
            <p className="text-neutral-400 cursor-pointer">
              M. Hibatillah Hasanin
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
        </div>

        <div className="col-span-1 px-5 pt-12 pb-16 space-y-10">
          <p className="ms-auto w-fit mb-16 text-neutral-400 text-end">
            Pekanbaru, Indonesia
          </p>

          <Featured />
          <Projects />
          <Works />
          <Educations />
        </div>
      </main>
    </div>
  );
}
