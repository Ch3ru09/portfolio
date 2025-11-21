import Link from "next/link";

export default function Cards({ projects }: { projects: Project[] }) {
  return (
    <ul className="mt-[50%] flex grow flex-col gap-4">
      {projects.map((x, i) => {
        return (
          <li className="font-body aspect-square w-1/4 text-2xl" key={i}>
            <Link
              href={"/project/" + x.link}
              className={`${x.available ? "bg-primary-20" : "bg-foreground-20"} ${x.available ? "" : "pointer-events-none hover:cursor-not-allowed"} text-primary flex h-52 w-52 items-center justify-center text-center`}
            >
              <h2>{x.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export type Project = {
  title: string;
  link: string;
  available: boolean;
};
