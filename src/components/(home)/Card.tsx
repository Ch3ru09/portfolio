"use client";

import {
  cubicBezier,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { Project } from "./Cards";
import { useRef } from "react";

export default function Card({ x }: { x: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const left = useTransform(
    springY,
    [0, 1],
    ["0%", "100%"],
    { ease: cubicBezier(0.1, 0.7, 0.5, 0.9) },
  );
  const translate = useTransform(
    springY,
    [0, 1],
    ["0% 0%", "-100% 0%"],
    { ease: cubicBezier(0, 0.7, 0.5, 0.9) },
  );
  const width = useTransform(
    springY,
    [0.5, 0.75, 1],
    ["20%", "25%", "20%"],
  );

  return (
    <motion.li
      ref={ref}
      style={{ left, translate, width }}
      className="relative font-body aspect-square w-1/5 h-auto text-2xl"
    >
      <Link
        href={"/project/" + x.link}
        className={`${x.available ? "bg-primary-20" : "bg-foreground-20"} ${
          x.available ? "" : "pointer-events-none hover:cursor-not-allowed"
        } text-primary flex h-full w-full items-center justify-center text-center rounded-full`}
      >
        <h2>{x.title}</h2>
      </Link>
    </motion.li>
  );
}
