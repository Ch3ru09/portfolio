"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Project } from "./Cards";
import { nbProjects } from "@/app/(home)/page";

export default function Labels({ x, i }: { x: Project; i: number }) {
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    console.log(v);
  });
  const color = useTransform(
    springY,
    [
      (i - 0.5) * (1 / nbProjects),
      (i + 0.5) * (1 / nbProjects),
      (i + 1.5) * (1 / nbProjects),
    ],
    [
      "var(--color-primary-60)",
      "var(--color-primary-90)",
      "var(--color-primary-60)",
    ],
  );
  const fontSize = useTransform(
    springY,
    [
      (i - 0.5) * (1 / nbProjects),
      (i + 0.5) * (1 / nbProjects),
      (i + 1.5) * (1 / nbProjects),
    ],
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
