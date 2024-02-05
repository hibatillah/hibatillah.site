import { Educations, Featured, Projects, Works } from "@/app/section";
import {
  discord,
  dribbble,
  figma,
  github,
  gmail,
  instagram,
  linkedin,
  monkeytype,
} from "@/assets/icons";
import Menu from "@/components/Menu";
import Image from "next/image";
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
              Designing <br /> Turn Design into System with Code
            </h1>
          </div>

          <nav className="w-40 my-auto flex flex-col [counter-reset:nav]">
            <Menu name="Projects" />
            <Menu name="Works" />
            <Menu name="Educations" />
          </nav>

          <ul className="mt-auto w-fit flex items-center gap-3">
            <li>
              <Link
                target="_blank"
                href="https://linkedin.com/in/hibatillahhabib">
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://instagram.com/hibat.illah">
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/hibatillah">
                <Image
                  src={github}
                  alt="Github"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://figma.com/@hibatillah">
                <Image
                  src={figma}
                  alt="Figma"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://dribbble.com/hibatillah">
                <Image
                  src={dribbble}
                  alt="Dribbble"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://discordapp.com/users/701649381652168714">
                <Image
                  src={discord}
                  alt="Discord"
                  className="size-4 object-contain select-none pointer-events-none"
                />
              </Link>
            </li>
          </ul>
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
