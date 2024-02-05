export type Project = {
  image: string;
  title: string;
  description: string;
  date: Date;
  formattedDate?: string;
  source?: string;
  live?: string;
  stack?: Stack;
};

export type Experience = {
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
};

export type Stack = (
  | "NextJS"
  | "TailwindCSS"
  | "ShadcnUI"
  | "Firebase"
  | "Android"
  | "ASPNET"
  | "MongoDB"
  | "ExpressJS"
  | "ReactJS"
  | "NodeJS"
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Kotlin"
  | "Python"
  | "JQuery"
  | "Typescript"
  | "Figma"
)[];
