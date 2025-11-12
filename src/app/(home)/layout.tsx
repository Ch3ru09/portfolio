import Chevrons from "@/assets/Chevrons-down.svg";
import ChangePage from "@/components/(home)/ChangePage";
import Image from "next/image";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="h-screen w-24 fixed flex flex-col justify-between py-16">
        <Image
          src={Chevrons}
          alt="Chevrons pointed down"
          className="-translate-x-2/5 w-1/2 "
        />
        <ChangePage />
      </nav>
      <main className="w-[calc(100vw-12rem)] m-auto">{children}</main>
      <nav className="right-0 h-screen w-24 fixed flex flex-col items-end-safe justify-between py-16">
        <div></div>
        <Image
          src={Chevrons}
          alt="Chevrons pointed down"
          className="translate-x-2/5 w-1/2"
        />
      </nav>
    </>
  );
}

