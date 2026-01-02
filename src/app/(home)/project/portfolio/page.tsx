import Image from "next/image";
import TimelineArrow from "./TimelineArrow";

import NextjsLogo from "../../../../assets/logos/NextjsLogo";
import ReactLogo from "../../../../assets/logos/ReactLogo";
import TailwindLogo from "../../../../assets/logos/TailwindLogo";
import TypescriptLogo from "../../../../assets/logos/TypescriptLogo";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="m-auto mt-24 w-4/5">
      <div className="flex">
        <Image className="grow basis-0" src="/" alt="" width={0} height={0} />
        <div className="gap grow basis-0">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Portfolio
          </h1>
          <p className="mx-2 mt-4 mb-8">
            This page offers a behind the scenes highlight of the creative and
            technical decisions behind this portfolio. From early sketches to
            refined prototypes, it outlines how each element of the site was
            shaped with intention; focusing on clarity, personality, and a
            seamless user experience.
          </p>
          <p>
            <Link
              href={"/project/portfolio/devlog"}
              className="mx-2 text-xl text-primary-80"
            >
              See devlog
            </Link>
          </p>
          <div className="my-4 flex gap-4">
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-primary hover:cursor-pointer"
            >
              <NextjsLogo className="aspect-square h-auto w-12" />
            </Link>
            <Link
              href="https://react.dev/"
              target="_blank"
              className="hover:text-primary hover:cursor-pointer"
            >
              <ReactLogo className="aspect-square h-auto w-12" />
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="hover:text-primary hover:cursor-pointer"
            >
              <TailwindLogo className="aspect-square h-auto w-12" />
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="hover:text-primary hover:cursor-pointer"
            >
              <TypescriptLogo className="aspect-square h-auto w-12" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-heading text-primary mt-32 text-4xl font-bold">
          Timeline
        </h2>
        <div className="mt-8 ml-16">
          <TimelineArrow />
        </div>
      </div>
      <div>
        <header className="flex justify-between">
          <h2 className="font-heading text-primary mt-8 text-4xl font-bold">
            Challenges
          </h2>
          <h2 className="font-heading text-primary mt-8 text-4xl font-bold">
            Solutions
          </h2>
        </header>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h2 className="font-heading text-primary mt-8 text-4xl font-bold">
          Future Plans
        </h2>
      </div>
    </div>
  );
}
