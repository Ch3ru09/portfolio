import Image from "next/image";

import PortraitImage from "./assets/portrait.webp";
import UwaterlooLogo from "./assets/uwaterloo_logo.png";
import ChamplainLogo from "./assets/champlain_logo.png";
import JDLMLogo from "./assets/jdlm_logo.svg";

export default function AboutPage() {
  return (
    <div className="flex w-4/5 m-auto mt-16">
      <div className="flex flex-col basis-0 grow gap-8">
        <Image
          src={PortraitImage}
          alt="Photograph of Xu ning Liang"
          className="basis-0 h-auto"
        />
        <ul className="flex flex-col items-center gap-4">
          <li className="w-full">
            <Image src={UwaterlooLogo} alt="Logo University of Waterloo" />
          </li>
          <li className="w-full">
            <Image
              src={ChamplainLogo}
              alt="Logo Champlain Regional College Saint-Lambert"
              className="w-1/2 m-auto"
            />
          </li>
          <li className="w-full">
            <Image
              src={JDLMLogo}
              alt="Logo College Jean de la Mennais"
              className="w-1/2 m-auto"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center basis-0 grow-2 gap-8">
        <h1 className="font-calligraphy flex justify-center text-primary">
          <div className="flex items-center mr-6">
            <p className={"text-8xl"}>梁</p>
            <p className={" [writing-mode:sideways-rl]"}>Liang</p>
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

