import { Experience } from "@/lib/types";
import { BookMarked, Code, GraduationCap } from "lucide-react";

const works: Experience[] = [
  {
    title: "Front-End Javascript Developer Internship",
    subtitle: "BPPK Kementrian Keuangan",
    date: "Feb - Jun 2024",
    icon: <Code size={16} className="text-teal-600" />,
  },
];

const educations: Experience[] = [
  {
    title: "Politeknik Caltex Riau",
    subtitle: "B.A.Sc in Information Systems",
    date: "Sep 2021 - Present",
    icon: <GraduationCap size={20} className="text-indigo-600" />,
  },
  {
    title: "SMA IT Imam Syafi'i 2 Pekanbaru",
    subtitle: "High School in Science",
    date: "Jul 2018 - May 2021",
    icon: <BookMarked size={16} className="text-blue-600" />,
  },
];

export { educations, works };
