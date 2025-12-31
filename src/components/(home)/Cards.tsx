"use client";

import {
  motion,
  spring,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Card from "./Card";

export default function Cards({ projects }: { projects: Project[] }) {
  const { scrollY } = useScroll();
  const springY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(
    springY,
    [0, 1],
    [0, -1],
    { clamp: false },
  );

  return (
    <motion.ul
      style={{ y }}
      className="mt-[10%] fixed flex flex-col gap-10 w-[calc(80vw-12rem)]"
    >
      {projects.map((x, i) => {
        return <Card x={x} key={i} />;
      })}
    </motion.ul>
  );
}

export type Project = {
  title: string;
  link: string;
  available: boolean;
};
