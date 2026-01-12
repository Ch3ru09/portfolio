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
import { RefObject } from "react";

export default function Labels(
  { x, i, cardsRef }: {
    x: Project;
    i: number;
    cardsRef: RefObject<HTMLUListElement | null>;
  },
) {
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: [`start ${0.15}`, "end start"],
  });
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
