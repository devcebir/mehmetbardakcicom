import Link from "next/link";
import { RiMoonClearLine } from "react-icons/ri";
import { SiAtom } from "react-icons/si";
import { FiSun } from "react-icons/fi";

export default function Header() {
  return (
    <header className=" text-white text-xl font-bold dark:bg-blue">
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
          <RiMoonClearLine className="hidden" />
          <FiSun className="hidden" />
        </div>
      </div>

      <div className="h-[0.5px] bg-zinc-700 w-full"></div>
    </header>
  );
}
