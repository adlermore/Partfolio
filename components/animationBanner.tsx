"use client";

import React from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

export default function AnimationBanner() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center max-h-600px"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >




      <div className="anim">
        <Spline
          scene="https://prod.spline.design/KdDcKxk6Llrw51GQ/scene.splinecode"
        />
      </div>
    </motion.section>
  );
}


