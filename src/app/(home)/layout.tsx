import { LeftNav, RightNav } from "@/components/(home)/NavSides";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="h-screen w-24 fixed flex flex-col py-16 grow">
        <LeftNav />
      </nav>
      <main className="w-[calc(100vw-12rem)] m-auto">{children}</main>
      <nav className="right-0 h-screen w-24 fixed flex flex-col py-16 justify-end-safe items-end-safe">
        <RightNav />
      </nav>
    </>
  );
}

