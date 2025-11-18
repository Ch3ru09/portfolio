"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowLeft from "@/assets/arrow-left.svg";
import Image from "next/image";

export default function ChangePage({ direction }: { direction: -1 | 1 }) {
  const pathname = usePathname();

  const { url, text } = getURL(pathname);

  return (
    <Link href={url} className="flex flex-col items-center gap-2">
      <h2 className="font-heading w-fit origin-center text-center text-4xl font-bold [writing-mode:sideways-lr]">
        {text}
      </h2>
      <Image
        src={ArrowLeft}
        alt="Arrow pointing left"
        className="aspect-square h-auto w-1/4"
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
