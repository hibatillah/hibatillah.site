import { Experience } from "@/lib/types";
import { BookMarked, Code, GraduationCap } from "lucide-react";

const works: Experience[] = [
  {
    title: "Front end Developer Internship",
    subtitle: "BPPK Ministry of Finance",
    date: "Feb - Jun 2024",
    icon: <Code size={16} className="text-red-600" />,
  },
];

const educations: Experience[] = [
  {
    title: "Politeknik Caltex Riau",
    subtitle: "B.A.Sc in Information Systems",
    date: "Sep 2021 - Present",
    icon: <GraduationCap size={20} className="text-teal-600" />,
  },
  {
    title: "SMA IT Imam Syafi'i 2 Pekanbaru",
    subtitle: "High School in Science",
    date: "Jul 2018 - May 2021",
    icon: <BookMarked size={16} className="text-blue-600" />,
  },
];

export { educations, works };
