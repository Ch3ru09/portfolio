import Cards, { Project } from "@/components/(home)/Cards";
import Labels from "@/components/(home)/Labels";

export default function Home() {
  return (
    <>
      <div
        className={`mr-[10vw] ml-[10vw] relative`}
        style={{ height: `${Math.floor(projects.length / 2) * 100 + 25}vh` }}
      >
        <div className="fixed top-24">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Liang, Xu ning
          </h1>
          <ul className="mt-8 pl-8">
            {projects.map((x, i) => {
              return <Labels x={x} i={i} />;
            })}
          </ul>
        </div>
        <Cards projects={projects} />
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
