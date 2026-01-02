import Email from "@/assets/nav/Email";
import GithubLogo from "@/assets/nav/GithubLogo";
import LinkedinLogo from "@/assets/nav/LinkedinLogo";
import Link from "next/link";

export default function IconList() {
  return (
    <ul className="flex h-fit w-fit flex-col gap-4">
      <li className="aspect-square h-auto w-12">
        <Link
          href="mailto:xliang0905@gmail.com"
          target="_blank"
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
          target="_blank"
          className="hover:text-primary focus-visible:text-primary transition-colors duration-200"
        >
          <LinkedinLogo className="h-auto w-full" />
        </Link>
      </li>
    </ul>
  );
}
