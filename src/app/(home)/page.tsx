import Cards, { Project } from "@/components/(home)/Cards";

export default function Home() {
  return (
    <>
      <div className="mr-[10%] ml-[10%] flex">
        <div className="fixed top-24">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Liang, Xu ning
          </h1>
          <ul className="mt-8 pl-8">
            {projects.map((x, i) => {
              return (
                <li className="font-body text-2xl" key={i}>
                  — {x.title}
                </li>
              );
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
