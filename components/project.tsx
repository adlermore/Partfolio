"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  webLink,
}: ProjectProps) {
  return (
    <motion.div
      className="project_block"
    >
      <div className="project_inner bg-gray-100 border border-black/5 rounded-lg overflow-hidden  hover:bg-gray-200 transition.
       dark:text-white dark:bg-white/10 dark:hover:bg-white/20 relative">
        <a href={webLink} className="absolute top-0 z-[999] left-0 right-0 bottom-0 w-full h-full" target="_blank" />
        <div className="project_info">
          <span className="text-2xl font-semibold project_title">{title}</span>
          <p className="mt-2  project_description leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap project_skills mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="project_img relative z-0">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          />
        </div>
      </div>
    </motion.div>
  );
}
