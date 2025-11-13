import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="ml-[10%] mr-[10%] flex">
        <div>
          <h1 className="text-6xl font-heading font-bold text-primary mt-16">
            Portfolio
          </h1>
          <ul className="pl-8">
            {projects.map((x, i) => {
              return (
                <li className="text-2xl font-body" key={i}>
                  — {x.title}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="flex flex-col gap-4">
          {projects.map((x, i) => {
            return (
              <li
                className="text-2xl font-body flex justify-center bg-foreground aspect-square"
                key={i}
              >
                <Link href={"/project/" + x.link}>{x.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const projects: Project[] = [
  { title: "Portfolio", link: "portfolio" },
  { title: "RC Technique", link: "rctechnique" },
  { title: "Dawnlight", link: "dawnlight" },
  { title: "Blackjack", link: "blackjack" },
  { title: "Pebble", link: "pebble" },
];

type Project = {
  title: string;
  link: string;
};

