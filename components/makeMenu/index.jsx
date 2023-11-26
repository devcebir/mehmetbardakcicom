import Link from "next/link";

export default function makeMenu() {
  return (
    <nav className="flex items-center gap-6 font-medium text-lg max-md:hidden">
      <Link
        className="hover:text-[#D2E3C8] transition-all duration-300"
        to="/projects"
      >
        Projeler
      </Link>
      <Link
        className="hover:text-[#D2E3C8] transition-all duration-300"
        to="/about"
      >
        Hakkımda
      </Link>
      <Link
        className="hover:text-[#D2E3C8] transition-all duration-300"
        to="/contact"
      >
        İletişim
      </Link>
    </nav>
  );
}
