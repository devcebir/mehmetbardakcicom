import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className="h-[0.5px] bg-zinc-700 w-full"></div>
      <div className="py-3 select-none text-sm max-sm:text-xs flex text-white items-center justify-center gap-3">
        <h3 className="text-center">
          <Link
            className="font-bold animated-gradient"
            href="https://twitter.com/devcebir"
            target="_blank"
          >
            Mehmet Bardakcı&nbsp;
          </Link>
          ❤️&nbsp;tarafından geliştirildi
        </h3>
        <p>|</p>
        <div className="flex items-center justify-center gap-2 text-lg">
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="https://www.twitter.com/devcebir"
            target="_blank"
          >
            <RiTwitterXFill />
          </Link>
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="https://www.instagram.com/devcebir"
            target="_blank"
          >
            <BsInstagram />
          </Link>
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="https://www.linkedin.com/in/devcebir"
            target="_blank"
          >
            <SiLinkedin />
          </Link>
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="https://www.github.com/devcebir"
            target="_blank"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
