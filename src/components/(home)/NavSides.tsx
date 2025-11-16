"use client";

import Image from "next/image";

import ChangePage from "@/components/(home)/ChangePage";
import Chevrons from "@/assets/Chevrons-down.svg";
import { usePathname } from "next/navigation";

export function LeftNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="grow basis-0">
        {pathname == "/about" ? (
          <div className="grow basis-0 flex flex-col gap-2">
            <div className="aspect-square w-14 h-auto bg-primary rounded-full translate-x-4/5 -translate-y-4/5"></div>
            <div className="aspect-square w-14 h-auto bg-primary rounded-full translate-x-4/5 -translate-y-4/5"></div>
            <div className="aspect-square w-14 h-auto bg-primary rounded-full translate-x-4/5 -translate-y-4/5"></div>
          </div>
        ) : (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="-translate-x-2/5 w-1/2 transition-all duration-500"
          />
        )}
      </div>
      <div className="grow basis-0 flex flex-col justify-end-safe">
        {pathname == "/about" ? (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="-translate-x-2/5 w-1/2 transition-all duration-500"
          />
        ) : (
          <ChangePage direction={1} />
        )}
      </div>
    </>
  );
}

export function RightNav() {
  const pathname = usePathname();

  return (
    <>
      {pathname == "/about" ? (
        <Image
          src={Chevrons}
          alt="Chevrons pointed down"
          className="translate-x-2/5 w-1/2 transition-all duration-500"
          style={{ top: "4rem" }}
        />
      ) : (
        <div className="grow basis-0 flex flex-col gap-2">
          <div className="aspect-square w-14 h-auto bg-primary rounded-full -translate-x-4/5 -translate-y-4/5"></div>
          <div className="aspect-square w-14 h-auto bg-primary rounded-full -translate-x-4/5 -translate-y-4/5"></div>
          <div className="aspect-square w-14 h-auto bg-primary rounded-full -translate-x-4/5 -translate-y-4/5"></div>
        </div>
      )}
      <div className="w-full grow basis-0 flex flex-col justify-end-safe items-end-safe">
        {pathname == "/about" ? (
          <ChangePage direction={-1} />
        ) : (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="translate-x-2/5 w-1/2 transition-all duration-500"
            style={{ top: "4rem" }}
          />
        )}
      </div>
    </>
  );
}

