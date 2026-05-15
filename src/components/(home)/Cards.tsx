"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Card from "./Card";

export default function Cards({ projects }: { projects: Project[] }) {
  return (
    <motion.ul
      style={{ y }}
      className="fixed mt-[10%] flex w-[calc(80vw-12rem)] max-w-[1000px] flex-col gap-10"
    >
      {projects.map((x, i) => {
        return <Card card={x} key={i} yProgress={short} index={i} />;
      })}
    </motion.ul>
  );
}
