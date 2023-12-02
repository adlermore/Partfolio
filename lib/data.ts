import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated National Polytechnic  University of Armenia",
    location: "Erevan",
    description:
      "In the 4th year i immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Studio One",
    description:
      "Aapplication layout and functionality writing using HTML/CSS, JavaScript, Bootstrap, Php, MySql development of component or application logic thinking through application architecture search and evaluation of solutions refactoring and optimization of current functionality setting up and optimizing the project build",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "React Js Developer",
    location: "IT Fabers LLC",
    description:
      "Creating online stores using React Js, Node js ,  Development of multi-user and cross-browser applications Implementation and support of security features.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "React/Next Js Developer",
    location: "LIGHT",
    description:
      "Development and optimization of the user interface, Working with designers and back-end developers, Development of multi-user and cross-browser applications,Performance optimization, Implementation and support of security features... Main technologies React Redux, TypeScript, RestFull, Mango Db",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GitHub",
  "GitLab",
  "Redux / Toolkit",
  "GraphQL",
  "SCSS/SASS",
  "Bootsrtap",
  "Material UI",
  "UiKit",
  "Docer",
  "Framer Motion",
  "SQL/MySql",
  "Php/Laravel",
  "Python",
  "C++ , MFC App",
] as const;
