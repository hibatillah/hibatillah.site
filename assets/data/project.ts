import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    title: "Noted",
    description: "Make simple notes, ez use and integrated, with Noted.",
    source: "https://github.com/hibatillah/noted",
    stack: ["NextJS", "Typescript", "Firebase", "ShadcnUI", "TailwindCSS"],
    date: new Date(),
    image: "noted",
  },
  {
    title: "Ekolog App - Natural Disaster Reporting App",
    description:
      "5th semester project for Mobile Programming and Data Science courses. Provides an Android application to report a disaster and identify the level of disaster damage using data science",
    source: "https://github.com/hibatillah/ekolog-app",
    stack: ["Android", "Kotlin", "Firebase"],
    date: new Date("2024-01-08"),
    image: "ekolog",
  },
  {
    title:
      "Supply Chain System for Indogrosir Partners and Redesign Indogrosir Website",
    description:
      "5th semester project for Framework Enterprise courses. Providing a supply chain management web system for Indogrosir and each of its partners, as well as redesigning the Indogrosir website to be more attractive and comfortable to use while still providing various information related to Indogrosir.",
    source: "https://github.com/hibatillah/indogrosir-scm",
    stack: ["ASPNET", "TailwindCSS"],
    date: new Date("2024-01-08"),
    image: "indogrosir",
  },
  {
    title: "Supply Chain System Study Case Rotte Bakery",
    description:
      "4th semester project for supply chain management, data visualization, and framework programming courses. Provide supply chain management web system for each stakeholder, as well as visualization of historical data owned.",
    source: "https://github.com/hibatillah/capstone-tim1",
    live: "https://rotte-supply-chain.vercel.app/",
    stack: ["NodeJS", "ExpressJS", "MongoDB", "ReactJS", "TailwindCSS"],
    date: new Date("2023-07-14"),
    image: "rotte",
  },
  {
    title: "MassBeat - Workout App and Trainer Consultation",
    description:
      "An app that provides a workout program and coach consultation services, healthy food recommendations and communities to interact with each other in providing support for healthy living.",
    live: "https://www.behance.net/gallery/162029955/MassBeat-Aplikasi-Workout-Dan-Konsultasi-Trainer",
    stack: ["Figma"],
    date: new Date("2023-05-29"),
    image: "massbeat",
  },
  {
    title: "Monochrome Portfolio",
    description:
      "Monochrome minimalist portfolio with responsive and darkmode design.",
    source: "https://github.com/hibatillah/minimalist-portfolio",
    live: "https://hibatillah-monochromeportfolio.vercel.app",
    stack: ["ReactJS", "TailwindCSS"],
    date: new Date("2023-06-04"),
    image: "minimalistPortfolio",
  },
  {
    title: "Modern Portfolio",
    description: "Personal portfolio with modern and responsive design.",
    source: "https://github.com/hibatillah/modern-portfolio",
    live: "https://hibatillah-modernportfolio.vercel.app",
    stack: ["ReactJS", "TailwindCSS"],
    date: new Date("2023-03-25"),
    image: "modernPortfolio",
  },
  {
    title: "Web Identification of Rice Types based on Color",
    description:
      "3rd semester project of Data Mining course at Politeknik Caltex Riau. Applies the concept of deep learning and image processing with Python to identify the inputted images and classify them based on color.",
    source: "https://hibatillah.github.io/ProjectPD/",
    live: "https://hibatillah.github.io/ProjectPD/",
    stack: ["Python", "JQuery", "HTML", "TailwindCSS"],
    date: new Date("2023-01-15"),
    image: "jenisBeras",
  },
  {
    title: "Classroom Loan Information Systems",
    description:
      "Classroom lending website with room availability features, room loan forms as well as activity and room borrowing history.",
    source: "https://github.com/hibatillah/peminjaman-ruangan",
    live: "https://pinjamruangan.vercel.app",
    stack: ["Javascript", "HTML", "CSS"],
    date: new Date("2023-05-20"),
    image: "pinjamRuangan",
  },
];

export default projects;
