"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Project } from "./Cards";

export default function Labels({ x, i }: { x: Project; i: number }) {
  const { scrollYProgress } = useScroll();
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["", ""],
  );

  return (
    <motion.li key={i} style={{}} className="font-body text-2xl">
      — {x.title}
    </motion.li>
  );
}
