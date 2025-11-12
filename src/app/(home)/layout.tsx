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
      <nav className="h-screen w-24 fixed">
        <Image src={Chevrons} alt="Chevrons pointed down" />
        <ChangePage />
      </nav>
      <>{children}</>
      <nav></nav>
    </>
  );
}

