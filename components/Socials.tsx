import * as icons from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  const socialLink = [
    {
      name: "linkedin",
      url: "https://linkedin.com/in/hibatillahhabib",
    },
    {
      name: "instagram",
      url: "https://instagram.com/hibat.illah",
    },
    {
      name: "github",
      url: "https://github.com/hibatillah",
    },
    {
      name: "figma",
      url: "https://figma.com/@hibatillah",
    },
    {
      name: "dribbble",
      url: "https://dribbble.com/hibatillah",
    },
    {
      name: "discord",
      url: "https://discordapp.com/users/701649381652168714",
    },
  ];

  return (
    <ul className="mt-auto w-fit flex items-center gap-3">
      {socialLink.map((social, index) => (
        <li key={index}>
          <Link target="_blank" href={social.url}>
            <Image
              src={icons[social.name as keyof typeof icons]}
              alt={social.name}
              className="size-5 lg:size-4 object-contain select-none pointer-events-none"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
