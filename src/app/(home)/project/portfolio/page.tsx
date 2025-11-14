import Image from "next/image";
import SmallChevron from "./SmallChevron";
import TimelineArrow from "./TimelineArrow";

export default function PortfolioPage() {
  return (
    <div className="w-4/5 m-auto mt-24">
      <div className="flex">
        <Image className="basis-0 grow" src="/" alt="" width={0} height={0} />
        <div className="basis-0 grow">
          <h1>Portfolio</h1>
          <p>
            Here&apos;s all you need to know about this website, from its design
            process to its deployment, passing of course through the building
            process.
          </p>
          <h2>Technologies</h2>
          <div></div>
        </div>
      </div>
      <div>
        <header className="flex justify-between w-full">
          <h2>Timeline</h2>
          <button className="flex">
            View Full Timeline <SmallChevron />
          </button>
        </header>
        <TimelineArrow />
      </div>
      <div>
        <header className="flex justify-between">
          <h2>Challenges</h2>
          <h2>Solutions</h2>
        </header>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h2>Future Plans</h2>
      </div>
    </div>
  );
}

