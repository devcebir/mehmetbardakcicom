import Link from "next/link";
import "@/components/header/header.css";
import { TbAtom2Filled } from "react-icons/tb";

export const metadata = {
  title: "Mehmet Bardakcı - Projeler",
}; 
const Header = () => {
  return (
    <header className="flex justify-between items-center text-3xl py-5 max-lg:text-2xl max-sm:text-base">
      <h1 className="font-bold hover:text-amber-600 transform transition-all duration-300">
        <Link href="/">mehmet bardakcı</Link>
      </h1>
      <div className="flex items-center gap-5">
        <Link
          href="/blog"
          className="text-xl hover:text-zinc-400 border-b-2 hover:border-zinc-400 transform transition-all duration-300 max-sm:text-sm"
        >
          <p>Blog</p>
        </Link>
        <Link href="/projects">
          <TbAtom2Filled className="TbAtom2Filled hover:text-amber-600 transform transition-all duration-300" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
