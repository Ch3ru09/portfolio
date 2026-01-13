"use client";

import {
  motion,
  spring,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Card from "./Card";
import { RefObject } from "react";

export default function Cards(
  { projects, cardsRef }: {
    projects: Project[];
    cardsRef: RefObject<HTMLUListElement | null>;
  },
) {
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
      className="mt-[10%] fixed flex flex-col gap-10 w-[calc(80vw-12rem)] max-w-[1000px]"
      ref={cardsRef}
    >
      {projects.map((x, i) => {
        return <Card card={x} key={i} />;
      })}
    </motion.ul>
  );
}

export type Project = {
  title: string;
  link: string;
  available: boolean;
};
