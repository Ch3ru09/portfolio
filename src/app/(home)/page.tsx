import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="ml-[10%] mr-[10%] flex">
        <div className="fixed top-24">
          <h1 className="text-6xl font-heading font-bold text-primary">
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
        <ul className="flex flex-col gap-4 grow mt-[50%]">
          {projects.map((x, i) => {
            return (
              <li className="text-2xl font-body aspect-square w-1/4" key={i}>
                <Link
                  href={"/project/" + x.link}
                  className="w-52 h-52 flex justify-center items-center text-center bg-background text-primary"
                >
                  <h2>{x.title}</h2>
                </Link>
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

