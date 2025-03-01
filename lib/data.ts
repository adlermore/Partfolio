import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMedal } from "react-icons/gi";
import eldoradoimg from "@/public/eldoradoimg.png";
import cryptoImg from "@/public/cryptoExchange.png";
import cinemaImg from "@/public/frejaimg.png";
import velasImg from "@/public/velas.png";
import bonappImg from "@/public/Bonapp.png";
import artshaniImg from "@/public/artshani.png";


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


type Experience = {
  date: string;
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
};

export const experiencesData: ReadonlyArray<Experience> = [
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
    location: "STUDIO ONE",
    description:
      "Aapplication layout and functionality writing using HTML/CSS, JavaScript, Bootstrap, Php, MySql development of component or application logic thinking through application architecture search and evaluation of solutions refactoring and optimization of current functionality setting up and optimizing the project build",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Military experience ",
    description: '',
    location : "Armenian army",
    icon: React.createElement(GiMedal),
    date: "2021 - 2023",
  },
  {
    title: "React/Next Js Developer",
    location: "LIGHT",
    description:
      "Development and optimization of the user interface, Working with designers and back-end developers, Development of multi-user and cross-browser applications,Performance optimization, Implementation and support of security features... Main technologies React Redux, TypeScript, RestFull, Mango Db",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Software Enginer",
    location: "NOSHN",
    description:
      "As a Team Lead and Senior Web Developer at NOSHN, I lead a team of talented developers to design, develop, and optimize high-performance web applications. With a focus on delivering scalable and user-friendly solutions, I oversee the entire development lifecycle, from architecture to deployment.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Senior Frontend Developer",
    location: "LOGIX SOFTWARE",
    description:
      "Developing and maintaining scalable web applications using React and Next.js. Writing clean, maintainable code in TypeScript. Implementing responsive designs and ensuring cross-browser compatibility. Optimizing application performance and loading speeds.      ",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Crypto Exchange ",
    description: "Buy / Sell / Exchange cryptocurrency with the best commission 🤝 !!!",
    webLink:  "https://cryptoexchangearmenia.am/",
    tags: ["React", "Theree.js" , "SCSS" , "REST API" , "GoogleMap", "EmailJS"],
    imageUrl: cryptoImg,
  },
  {
    title: "Bonapp",
    description:
      "Table booking platform with animated solutions 🍽",
      webLink:  "https://bonaapp.vercel.app/",
      tags: ["React", "Scss", "Spring", "Mui", "mangoDb" , "Bootstrap"],
    imageUrl: bonappImg,
  },
  {
    title: "Artshani",
    description:
      "The company produces natural fruit juices Artshani and Darvita 🍷",
      webLink:  "https://artshani.com/",
      tags: ["HTML", "SCSS", "Jquery", "Bootstrap", "MySql" , "PhP"],
    imageUrl: artshaniImg,
  },
  {
    title: "Freja & Son", 
    description:
      "Import & Distribution Retail , Horeca and etc Food Service  🍛",
      webLink:  "https://www.freja.am/am/",
      tags: ["Html5", "PHP", "RestFull", "SCSS", "Spring", "Json"],
    imageUrl: cinemaImg,
  },
  {
    title: "Velas Template",
    description:
      "Ship information  , yacht charters  and contact platform  ⚓",
      webLink:  "https://velas-eight.vercel.app/",
      tags: ["React", "Scss", "Slick", "Spring", "FancyBox" , "Validate" , "Routing" ],
    imageUrl: velasImg,
  },
  {
    title: "Eldorado.am",
    description:
      "Online Shop Eldorado for Armenian Users 🛍️",
      webLink:  "https://eldorado.am/",
      tags: ["Html5", "Scss", "Jquery", "Ajax", "FancyBox" , "Validate" , "Routing" ],
    imageUrl: eldoradoimg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Rust", 
  "Node.js",
  "Wordrpess",
  "Git",
  "GitHub",
  "GitLab",
  "Redux / Toolkit",
  "RestFull",
  "GraphQL",
  "Docker",
  "Prisma",
  "Tailwind",
  "SCSS/SASS",
  "Bootsrtap",
  "Material UI",
  "UIKit",
  "Charka UI",
  "Docer",
  "Framer Motion",
  "GSAP",
  "SQL/MySql",
  "Php/Laravel",
  "Python",
  "C++ , MFC App",
  "Arduino",
  "Raspberry Pi"
] as const;
