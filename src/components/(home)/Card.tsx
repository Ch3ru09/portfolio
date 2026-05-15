"use client";

import { Project } from "@/app/(home)/page";
import {
  cubicBezier,
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import Link from "next/link";

export default function Card({
  card,
  yProgress,
  index,
}: {
  card: Project;
  yProgress: MotionValue<number>;
  index: number;
}) {
  const start = calcStart(index);
  const end = calcStart(index) + 0.5;

  // const yEase = useTransform(yProgress, [start + 0.15, end + 0.5], [0, 1], {
  //   clamp: false,
  //   ease: cubicBezier(0.4, 0.6, 0.4, 0.6),
  // });

  const leftPercent = useTransform(yProgress, [start, end], [0, 1], {
    ease: (t: number) => {
      return t > 1 ? t : cubicBezier(0.5, 0.5, 0.5, 0.5)(t);
    },
    clamp: false,
  });

  useMotionValueEvent(leftPercent, "change", (x) => {
    if (index != 0) return;
    console.log(x);
  });

  const left = useTransform(leftPercent, [0, 1], ["0%", "100%"]);
  const translateX = useTransform(yProgress, [start, end], ["0%", "-100%"], {
    ease: cubicBezier(0.5, 0.5, 0.5, 0.5),
  });
  const width = useTransform(leftPercent, [0, 1, 1.2], ["5%", "30%", "20%"], {
    clamp: true,
  });
  const fontSize = useTransform(
    leftPercent,
    [0, 1, 1.2],
    ["0.375rem", "1.875rem", "1.5rem"],
    { clamp: true },
  );

  return (
    <motion.li
      style={{ left, translateX, width, fontSize }}
      className="font-body relative aspect-square h-auto w-1/5 text-2xl"
    >
      <Link
        href={"/project/" + card.link}
        className={`${card.available ? "bg-primary-20" : "bg-foreground-20"} ${
          card.available ? "" : "pointer-events-none hover:cursor-not-allowed"
        } text-primary flex h-full w-full items-center justify-center rounded-full text-center`}
      >
        <h2>{card.title}</h2>
      </Link>
    </motion.li>
  );
}

function calcStart(index: number) {
  return 0.125 * index;
}
