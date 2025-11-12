"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowLeft from "@/assets/arrow-left.svg";
import Image from "next/image";

export default function ChangePage() {
  const pathname = usePathname();

  const { url, text } = getURL(pathname);

  return (
    <Link
      href={url}
      className="flex flex-col h-1/2 justify-end-safe items-center"
    >
      <h2 className="[writing-mode:sideways-rl] text-center origin-center w-fit text-5xl">
        {text}
      </h2>
      <Image
        src={ArrowLeft}
        alt="Arrow pointing left"
        className="aspect-square w-3/4 h-auto"
      />
    </Link>
  );
}

function getURL(path: string): { url: string; text: string } {
  switch (path) {
    case "/":
      return { url: "/about", text: "About me" };
    case "/about":
      return { url: "/", text: "Portfolio" };
    default:
      return { url: "/", text: "Back" };
  }
}

