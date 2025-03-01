"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <h1 className="hidden">Ashot Karapetyan Portfolio Website</h1>

      <p className="mb-3">
        After graduating from Sisian High School I entered the Faculty of{" "}
        <span className="font-medium">Software Engineering</span>  of the National Polytechnic University of Armenia and began studying the World of Programming.
        <br /><span className="itlic">My favorite part of programming</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Next.js
        </span>

        I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        New position as a software developer.
      </p>
    </motion.section>
  );
}
