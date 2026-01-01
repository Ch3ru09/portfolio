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
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) },
  );
  const translate = useTransform(
    springY,
    [0, 1],
    ["0% 0%", "-100% 0%"],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) },
  );
  // const scale = useTransform(
  //   springY,
  //   [0.5, 0.75, 0.9],
  //   ["1", "2", "1"],
  // );

  return (
    <motion.li
      ref={ref}
      style={{ left, translate }}
      className="relative font-body aspect-square w-fit h-auto text-2xl"
    >
      <Link
        href={"/project/" + x.link}
        className={`${x.available ? "bg-primary-20" : "bg-foreground-20"} ${
          x.available ? "" : "pointer-events-none hover:cursor-not-allowed"
        } text-primary flex h-52 w-52 items-center justify-center text-center`}
      >
        <h2>{x.title}</h2>
      </Link>
    </motion.li>
  );
}
