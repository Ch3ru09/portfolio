"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Project } from "./Cards";
import { nbProjects } from "@/app/(home)/page";

export default function Labels({ x, i }: { x: Project; i: number }) {
  const { scrollYProgress } = useScroll();
  const color = useTransform(
    scrollYProgress,
    [(i - 1) / nbProjects, i / nbProjects, (i + 1) / nbProjects],
    [
      "var(--color-primary-60)",
      "var(--color-primary)",
      "var(--color-primary-60)",
    ],
  );
  const fontSize = useTransform(
    scrollYProgress,
    [(i - 1) / nbProjects, i / nbProjects, (i + 1) / nbProjects],
    [
      "1.5rem",
      "2.5rem",
      "1.5rem",
    ],
  );

  return (
    <motion.li
      key={i}
      style={{ color, fontSize }}
      className="font-body text-2xl"
    >
      — {x.title}
    </motion.li>
  );
}
