import { Educations, Featured, Projects, Works } from "@/app/section";
import Menu from "@/components/Menu";
import ScrollTop from "@/components/ScrollTop";
import Socials from "@/components/Socials";
import { cn, isTouchScreen } from "@/lib/util";
import Link from "next/link";

export default function Home() {
  const isTouched = isTouchScreen();

  return (
    <main className="container space-y-28 antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 lg:sticky lg:top-0 py-12 px-6 h-svh md:h-fit lg:h-dvh 2xl:h-fit flex flex-col gap-24">
          <Link href="/" className="w-fit flex items-center">
            <div className="h-5 flex flex-col text-sm *:text-neutral-400 overflow-hidden *:cursor-pointer *:transition-all *:ease-out *:duration-300 group">
              <p
                className={cn("", {
                  "motion-safe:lg:group-hover:-translate-y-5 motion-safe:lg:group-hover:invisible motion-safe:lg:group-hover:opacity-0":
                    !isTouched,
                })}>
                M. Hibatillah Hasanin
              </p>
              <p
                className={cn("invisible opacity-0", {
                  "motion-safe:lg:group-hover:-translate-y-5 motion-safe:lg:group-hover:visible motion-safe:lg:group-hover:opacity-100":
                    !isTouched,
                })}>
                Hibatillah Habib
              </p>
            </div>
          </Link>

          <div className="relative after:content-[url(../assets/gradient.svg)] after:absolute after:left-0 after:-bottom-5 after:w-40 after:h-1 after:object-contain">
            <h1 className="text-3xl md:text-[32px] leading-tight tracking-[0.015rem] text-neutral-300 font-medium text-balance">
              Passionate in front-end development and love to design, <br />{" "}
              turn design into code
            </h1>
          </div>

          <Menu />
          <Socials />
          <ScrollTop />
        </div>

        <div className="col-span-1 px-6 lg:pt-12 pb-24 lg:pb-14 space-y-10">

          <Featured />
          <Projects />
          <Works />
          <Educations />
        </div>
      </div>
    </main>
  );
}
