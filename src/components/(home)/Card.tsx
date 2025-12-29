"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Project } from "./Cards";
import { useRef } from "react";

export default function Card({ x }: { x: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const left = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <motion.li
      ref={ref}
      style={{ left }}
      className="relative font-body aspect-square w-1/4 text-2xl"
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
