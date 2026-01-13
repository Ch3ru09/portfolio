"use client";

import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { Project } from "./Cards";
import { useRef } from "react";

export default function Card({ card }: { card: Project }) {
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
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const left = useTransform(
    springY,
    [0, 1],
    ["0%", "100%"],
    { ease: cubicBezier(0, 0.7, 0.5, 0.9) },
  );
  const translateX = useTransform(
    springY,
    [0, 1],
    ["0%", "-100%"],
    { ease: cubicBezier(0, 0.7, 0.5, 0.9) },
  );
  const width = useTransform(
    springY,
    [0, 0.85, 1.1],
    ["5%", "25%", "20%"],
  );
  const fontSize = useTransform(
    springY,
    [0, 0.85, 1.1],
    ["0.375rem", "1.875rem", "1.5rem"],
  );

  return (
    <motion.li
      ref={ref}
      style={{ left, translateX, width, fontSize }}
      className="relative font-body aspect-square w-1/5 h-auto text-2xl"
    >
      <Link
        href={"/project/" + card.link}
        className={`${card.available ? "bg-primary-20" : "bg-foreground-20"} ${
          card.available ? "" : "pointer-events-none hover:cursor-not-allowed"
        } text-primary flex h-full w-full items-center justify-center text-center rounded-full`}
      >
        <h2>{card.title}</h2>
      </Link>
    </motion.li>
  );
}
