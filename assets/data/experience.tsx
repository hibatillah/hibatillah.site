import { Experience } from "@/lib/types";
import { BookMarked, Code, GraduationCap } from "lucide-react";

const works: Experience[] = [
  {
    title: "Front end Developer Internship",
    subtitle: "BPPK Ministry of Finance",
    date: "Feb - Jul 2024",
    icon: <Code size={16} className="text-red-600" />,
  },
];

const educations: Experience[] = [
  {
    title: "Politeknik Caltex Riau",
    subtitle: "Bachelor Applied in Information Systems",
    date: "Sep 2021 - Aug 2025",
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
