"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  webLink,
}: ProjectProps) {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"],
  // });
  // const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      // ref={ref}
      style={{
        // scale: scaleProgess,
        // opacity: opacityProgess,
      }}
      className="project_block"
    >
      <div className="project_inner bg-gray-100 border border-black/5 rounded-lg overflow-hidden  relative hover:bg-gray-200 transition.
       dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="project_info">
          <a href={webLink} className="text-2xl font-semibold project_title">{title}</a>
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
        <div className="project_img">
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
