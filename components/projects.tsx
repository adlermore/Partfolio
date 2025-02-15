"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-[65rem] ">
      <SectionHeading>My projects</SectionHeading>
      <p className="mb-3 text-center leading-8 ">
      I worked on more than 70 projects, such as {" "}
        <span className="font-medium">zigzag.am, miniso.am, lagalleria.am, uno-shouse.am, eldorado.am, artashat-vincon.am, fortunahome.am, altech.am, armauthor.am, arilori.am, redcross.am, ohmenergy.am </span> 
       <br /><span className="italic">and others ...</span>
      </p>
      <div className="projects_grid mt-[50px]">
        {projectsData.map((project, index) => (
          <div className="project_wrapper" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
