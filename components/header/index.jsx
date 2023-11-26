import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiAtom } from "react-icons/si";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className=" text-white  text-xl font-bold">
      <div className="flex items-center justify-between px-36 py-3 max-md:px-10 max-md:flex-col max-md:gap-2">
        <h1 className=" hover:text-[#D2E3C8] transition-all duration-300">
          <Link href="/" className="text-2xl">
            <SiAtom />
          </Link>
        </h1>

        <nav className="flex items-center gap-6 font-medium text-lg max-md:text-sm">
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="/projects"
          >
            Projeler
          </Link>
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="/about"
          >
            Hakkımda
          </Link>
          <Link
            className="hover:text-[#D2E3C8] transition-all duration-300"
            href="/contact"
          >
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-2xl max-md:hidden">
          <div className="flex items-center gap-3">
            <Link
              className="hover:text-[#D2E3C8] transition-all duration-300"
              href="https://github.com/devcebir"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-[#D2E3C8] transition-all duration-300"
              href="https://www.linkedin.com/in/devcebir"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[0.5px] bg-zinc-700 w-full"></div>
    </header>
  );
}
