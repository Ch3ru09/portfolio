import { LeftNav, RightNav } from "@/components/(home)/NavSides";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="fixed flex h-screen w-24 grow flex-col py-16">
        <LeftNav />
      </nav>
      <main className="m-[0_auto] w-[calc(100vw-12rem)]">{children}</main>
      <nav className="fixed right-0 flex h-screen w-24 flex-col items-end-safe justify-end-safe py-16">
        <RightNav />
      </nav>
    </>
  );
}
