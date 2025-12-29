import Card from "./Card";

export default function Cards({ projects }: { projects: Project[] }) {
  return (
    <ul className="mt-[50%] flex grow flex-col gap-4">
      {projects.map((x, i) => {
        return <Card x={x} key={i} />;
      })}
    </ul>
  );
}

export type Project = {
  title: string;
  link: string;
  available: boolean;
};
