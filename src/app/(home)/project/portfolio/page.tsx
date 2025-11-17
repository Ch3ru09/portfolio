import Image from "next/image";
import SmallChevron from "./SmallChevron";
import TimelineArrow from "./TimelineArrow";

import NextjsLogo from "./assets/NextjsLogo";
import ReactLogo from "./assets/ReactLogo";
import TailwindLogo from "./assets/TailwindLogo";
import TypescriptLogo from "./assets/TypescriptLogo";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="w-4/5 m-auto mt-24">
      <div className="flex">
        <Image className="basis-0 grow" src="/" alt="" width={0} height={0} />
        <div className="basis-0 grow gap">
          <h1 className="font-heading font-bold text-6xl text-primary">
            Portfolio
          </h1>
          <p className="mt-4 mb-8 mx-2">
            This page offers a behind the scenes highlight of the creative and
            technical decisions behind this portfolio. From early sketches to
            refined prototypes, it outlines how each element of the site was
            shaped with intention; focusing on clarity, personality, and a
            seamless user experience.
          </p>
          <p>
            <Link href={"/project/portfolio/devlog"} className="mx-2">
              See devlog
            </Link>
          </p>
          <div className="flex gap-4 my-4">
            <NextjsLogo />
            <ReactLogo />
            <TailwindLogo />
            <TypescriptLogo />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-heading font-bold text-4xl text-primary mt-32">
          Timeline
        </h2>
        <div className="mt-8 ml-16">
          <TimelineArrow />
        </div>
      </div>
      <div>
        <header className="flex justify-between">
          <h2 className="font-heading font-bold text-4xl text-primary mt-8">
            Challenges
          </h2>
          <h2 className="font-heading font-bold text-4xl text-primary mt-8">
            Solutions
          </h2>
        </header>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h2 className="font-heading font-bold text-4xl text-primary mt-8">
          Future Plans
        </h2>
      </div>
    </div>
  );
}

