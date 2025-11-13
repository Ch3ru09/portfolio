"use client";

import Image from "next/image";

import ChangePage from "@/components/(home)/ChangePage";
import Chevrons from "@/assets/Chevrons-down.svg";

export function LeftNav() {
  return (
    <>
      <div className="grow basis-0">
        <Image
          src={Chevrons}
          alt="Chevrons pointed down"
          className="-translate-x-2/5 w-1/2 transition-all duration-500"
        />
      </div>
      <div className="grow basis-0 flex flex-col justify-end-safe">
        <ChangePage />
      </div>
    </>
  );
}

export function RightNav() {
  return (
    <>
      <div className="grow basis-0"></div>
      <div className="w-full grow basis-0 flex flex-col justify-end-safe items-end-safe">
        <Image
          src={Chevrons}
          alt="Chevrons pointed down"
          className="translate-x-2/5 w-1/2 transition-all duration-500"
          style={{ top: "4rem" }}
        />
      </div>
    </>
  );
}

