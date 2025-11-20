import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mr-[10%] ml-[10%] flex">
        <div className="fixed top-24">
          <h1 className="font-heading text-primary text-6xl font-bold">
            Liang, Xu ning
          </h1>
          <ul className="pl-8">
            {projects.map((x, i) => {
              return (
                <li className="font-body text-2xl" key={i}>
                  — {x.title}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="mt-[50%] flex grow flex-col gap-4">
          {projects.map((x, i) => {
            return (
              <li className="font-body aspect-square w-1/4 text-2xl" key={i}>
                <Link
                  href={"/project/" + x.link}
                  className="bg-primary-20 text-primary flex h-52 w-52 items-center justify-center text-center"
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
