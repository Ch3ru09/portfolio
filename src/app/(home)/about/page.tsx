import Image from "next/image";

import PortraitImage from "./assets/portrait.webp";
import UwaterlooLogo from "./assets/uwaterloo_logo.png";
import ChamplainLogo from "./assets/champlain_logo.png";
import JDLMLogo from "./assets/jdlm_logo.svg";
import TypescriptLogo from "@/assets/logos/TypescriptLogo";

export default function AboutPage() {
  return (
    <div className="m-auto mt-16 mb-16 flex w-4/5">
      <div className="flex grow basis-0 flex-col gap-8">
        <Image
          src={PortraitImage}
          alt="Photograph of Xu ning Liang"
          className="h-auto basis-0 rounded-2xl"
        />
        <ul className="flex flex-col items-center gap-4">
          <li className="w-full">
            <Image src={UwaterlooLogo} alt="Logo University of Waterloo" />
          </li>
          <li className="w-full">
            <Image
              src={ChamplainLogo}
              alt="Logo Champlain Regional College Saint-Lambert"
              className="m-auto w-1/2"
            />
          </li>
          <li className="w-full">
            <Image
              src={JDLMLogo}
              alt="Logo College Jean de la Mennais"
              className="m-auto w-1/2"
            />
          </li>
        </ul>
        <hr />
        <div>
          <h2 className="font-heading text-primary text-center text-4xl font-bold">
            Technical skills
          </h2>
          <ul>
            <li>
              <TypescriptLogo className="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex grow-2 basis-0 flex-col items-center gap-8">
        <h1 className="font-calligraphy text-primary flex justify-center">
          <div className="mr-6 flex items-center">
            <p className={"text-8xl"}>梁</p>
            <p className={"[writing-mode:sideways-rl]"}>Liang</p>
          </div>
          <div className="flex items-center">
            <p className={"text-8xl"}>栩</p>
            <p className={"[writing-mode:sideways-rl]"}>Xu</p>
          </div>
          <div className="flex items-center">
            <p className={"text-8xl"}>宁</p>
            <p className={"[writing-mode:sideways-rl]"}>Ning</p>
          </div>
        </h1>
        <p className="w-3/4">
          Hey, I&apos;m Xu ning Liang, a first year Electrical Engineering
          student at the University of Waterloo.
        </p>
      </div>
    </div>
  );
}
