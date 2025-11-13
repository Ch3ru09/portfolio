import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div>
      <Image src="/" alt="" width={0} height={0} />
      <div>
        <h1>Portfolio</h1>
        <p>Here&apos;s all you need to know about this website.</p>
        <h2>Collaborators</h2>
        <p>Me, Myself, and I</p>
      </div>
    </div>
  );
}

