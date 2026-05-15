"use client";

import Card from "@/components/(home)/Card";
import Labels from "@/components/(home)/Labels";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export default function Home() {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
  });
  const springY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const springYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(springY, [0, 1], [0, -1], {
    clamp: false,
  });

  // useMotionValueEvent(scrollYProgress, "change", (x) => {
  //   console.log(x);
  // });

  return (
    <>
      <div className={`relative mt-[10%] mr-[10vw] ml-[10vw] h-[210vh]`}>
        <div className="fixed top-24">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Liang, Xu ning
          </h1>
          <ul className="mt-8 pl-8">
            {projects.map((x, i) => {
              return <Labels key={i} x={x} i={i} />;
            })}
          </ul>
        </div>
        <motion.ul
          style={{ y }}
          className="fixed flex w-[calc(80vw-12rem)] max-w-[1000px] flex-col gap-10 py-5"
        >
          {projects.map((x, i) => {
            return (
              <Card card={x} key={i} yProgress={springYProgress} index={i} />
            );
          })}
        </motion.ul>
      </div>
    </>
  );
}

const projects: Project[] = [
  { title: "Portfolio", link: "portfolio", available: true },
  { title: "RC Technique", link: "rctechnique", available: false },
  { title: "Dawnlight", link: "dawnlight", available: false },
  { title: "Blackjack", link: "blackjack", available: false },
  { title: "Pebble", link: "pebble", available: false },
];

export const nbProjects = projects.length;

export type Project = {
  title: string;
  link: string;
  available: boolean;
};
