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
          <div className="flex grow basis-0 flex-col gap-2">
            <div className="bg-primary aspect-square h-auto w-14 translate-x-4/5 -translate-y-4/5 rounded-full"></div>
            <div className="bg-primary aspect-square h-auto w-14 translate-x-4/5 -translate-y-4/5 rounded-full"></div>
            <div className="bg-primary aspect-square h-auto w-14 translate-x-4/5 -translate-y-4/5 rounded-full"></div>
          </div>
        ) : (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="w-1/2 -translate-x-2/5 transition-all duration-500"
          />
        )}
      </div>
      <div className="flex grow basis-0 flex-col justify-end-safe">
        {pathname == "/about" ? (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="w-1/2 -translate-x-2/5 transition-all duration-500"
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
          className="w-1/2 translate-x-2/5 transition-all duration-500"
          style={{ top: "4rem" }}
        />
      ) : (
        <div className="flex grow basis-0 flex-col gap-2">
          <div className="bg-primary aspect-square h-auto w-14 -translate-x-4/5 -translate-y-4/5 rounded-full"></div>
          <div className="bg-primary aspect-square h-auto w-14 -translate-x-4/5 -translate-y-4/5 rounded-full"></div>
          <div className="bg-primary aspect-square h-auto w-14 -translate-x-4/5 -translate-y-4/5 rounded-full"></div>
        </div>
      )}
      <div className="flex w-full grow basis-0 flex-col items-end-safe justify-end-safe">
        {pathname == "/about" ? (
          <ChangePage direction={-1} />
        ) : (
          <Image
            src={Chevrons}
            alt="Chevrons pointed down"
            className="w-1/2 translate-x-2/5 transition-all duration-500"
            style={{ top: "4rem" }}
          />
        )}
      </div>
    </>
  );
}
