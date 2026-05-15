"use client";

import { motion } from "motion/react";
import { Project } from "@/app/(home)/page";

export default function Labels({ x, i }: { x: Project; i: number }) {
  const color = "var(--color-primary-90)";
  const fontSize = "1.5rem";

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
