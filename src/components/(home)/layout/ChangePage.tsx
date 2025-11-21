"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowLeft from "./ArrowLeft";

export default function ChangePage({ direction }: { direction: -1 | 1 }) {
  const pathname = usePathname();

  const { url, text } = getURL(pathname);

  return (
    <Link
      href={url}
      className="hover:text-primary focus-visible:text-primary flex flex-col items-center gap-2 transition-colors duration-200"
    >
      <h2 className="font-heading w-fit origin-center text-center text-4xl font-bold [writing-mode:sideways-lr]">
        {text}
      </h2>
      <ArrowLeft
        className="aspect-square h-auto w-1/5"
        style={{ scale: `${direction} 1` }}
      />
    </Link>
  );
}

function getURL(path: string): { url: string; text: string } {
  const back = path.split("/").slice(0, -1).join("/");

  switch (path) {
    case "/":
      return { url: "/about", text: "About me" };
    case "/about":
      return { url: "/", text: "Portfolio" };
    default:
      return { url: back == "/project" ? "/" : back, text: "Back" };
  }
}
