import {
  discord,
  dribbble,
  figma,
  github,
  instagram,
  linkedin,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <ul className="mt-auto w-fit flex items-center gap-3">
      <li>
        <Link target="_blank" href="https://linkedin.com/in/hibatillahhabib">
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
  );
}
