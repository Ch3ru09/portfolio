import Link from "next/link";

export default function NotFoundPage() {
  return (
    <h1 className="text-foreground">
      I don&apos;t know how you got here but here to go back{" "}
      <Link href={"/"} className="text-blue-600 underline">
        home
      </Link>
    </h1>
  );
}
