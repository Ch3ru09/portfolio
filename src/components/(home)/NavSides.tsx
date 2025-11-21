"use client";

import Image from "next/image";

import ChangePage from "@/components/(home)/ChangePage";
import Chevrons from "@/assets/Chevrons-down.svg";
import { usePathname } from "next/navigation";
import Email from "@/assets/nav/Email";
import GithubLogo from "@/assets/nav/GithubLogo";
import LinkedinLogo from "@/assets/nav/LinkedinLogo";
import Link from "next/link";

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
          <div className="flex flex-col items-center gap-8">
            <ul className="flex h-fit w-fit flex-col gap-4">
              <li className="aspect-square h-auto w-12">
                <Link
                  href="mailto:xliang0905@gmail.com"
                  className="hover:text-primary focus-visible:text-primary transition-colors duration-200"
                >
                  <Email className="h-auto w-full" />
                </Link>
              </li>
              <li className="aspect-square h-auto w-12">
                <Link
                  href="https://github.com/Ch3ru09/"
                  target="_blank"
                  className="hover:text-primary focus-visible:text-primary transition-colors duration-200"
                >
                  <GithubLogo className="h-auto w-full" />
                </Link>
              </li>
              <li className="aspect-square h-auto w-12">
                <Link
                  href="https://www.linkedin.com/in/xu-ning-liang-9632b523b/"
                  className="hover:text-primary focus-visible:text-primary transition-colors duration-200"
                >
                  <LinkedinLogo className="h-auto w-full" />
                </Link>
              </li>
            </ul>
            <ChangePage direction={-1} />
          </div>
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
