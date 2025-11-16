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
      <h2 className="[writing-mode:sideways-lr] text-center origin-center w-fit text-4xl font-heading font-bold">
        {text}
      </h2>
      <Image
        src={ArrowLeft}
        alt="Arrow pointing left"
        className="aspect-square w-1/4 h-auto"
        style={{ scale: `${direction} 1` }}
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

