"use client";

import Cards, { Project } from "@/components/(home)/Cards";
import Labels from "@/components/(home)/Labels";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const cardsRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (cardsRef.current) {
      setHeight(cardsRef.current.clientHeight + innerHeight);
    }
  }, [height]);

  return (
    <>
      <div
        className={`mr-[10vw] ml-[10vw] relative`}
        style={{ height }}
      >
        <div className="fixed top-24">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Liang, Xu ning
          </h1>
          <ul className="mt-8 pl-8">
            {projects.map((x, i) => {
              return <Labels key={i} x={x} i={i} cardsRef={cardsRef} />;
            })}
          </ul>
        </div>
        <Cards projects={projects} cardsRef={cardsRef} />
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
