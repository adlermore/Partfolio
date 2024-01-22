import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import todoImg from "@/public/toDo.png";
import cryptoImg from "@/public/cryptoExchange.png";
import cinemaImg from "@/public/cinemaApp.png";
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
    title: "Crypto Exchange ",
    description: "Buy / Sell / Exchange cryptocurrency with the best commission 🤝 !!!",
    webLink:  "https://cryptoexchangearmenia.am/",
    tags: ["React", "Theree.js" , "SCSS" , "REST" , "GoogleMap", "EmailJS" , "UiKit"],
    imageUrl: cryptoImg,
  },
  {
    title: "Cinema App", 
    description:
      "Cinema Website for whatch films and trailers with a sorting algorithm 🎬",
      webLink:  "https://cinema-app-iota.vercel.app/",
      tags: ["React", "RestFull", "scss", "Spring", "Json"],
    imageUrl: cinemaImg,
  },
  {
    title: "Bonapp",
    description:
      "Table booking platform with animated solutions 🍽",
      webLink:  "https://bonapp.vercel.app/",
      tags: ["React", "Scss", "spring", "mui", "mangoDb" , "Bootstrap"],
    imageUrl: bonappImg,
  },
  {
    title: "Artshani",
    description:
      "The company produces natural fruit juices Artshani and Darvita 🍷",
      webLink:  "https://bonapp-app.vercel.app/",
      tags: ["HTML", "Scss", "Jquery", "bootstrap", "mySql" , "php"],
    imageUrl: artshaniImg,
  },
  {
    title: "To Do",
    description:
      "My First React/Redux Project ToDo app  ✅",
      webLink:  "https://react-to-do-murex.vercel.app/",
      tags: ["React", "Scss", "Redux", "MangoDB", "RestAPI" , "Bootstrap"  ],
    imageUrl: todoImg,
  },
  {
    title: "Velas",
    description:
      "Ship information and contact platform  ⚓",
      webLink:  "https://velas-eight.vercel.app/",
      tags: ["React", "Scss", "Slick", "Spring", "FancyBox" , "Validate" , "Routing" ],
    imageUrl: velasImg,
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
