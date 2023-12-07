"use client";
import Link from "next/link";
import { GiBowString } from "react-icons/gi";
import { usePathname } from "next/navigation";
import avatar from "@/public/avatar.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Ana Sayfa",
      path: "/",
    },
    {
      name: "Projeler",
      path: "/projects",
    },

    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Yer İşaretleri",
      path: "/bookmarks",
    },
  ];

  return (
    <div
      className="h-screen w-1/6 bg-[#DDE6ED] dark:bg-[#27374D] flex flex-col items-center justify-between py-5
    rounded-e-3xl"
    >
      <Link href="/">
        <GiBowString
          className="text-5xl hover:opacity-60 transition-all
         duration-300 text-[#27374D] dark:text-[#DDE6ED]"
        />
      </Link>

      <nav className="text-zinc-400 flex flex-col items-center space-y-5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`text-3xl ${
              pathname === link.path
                ? "text-[#27374D] font-bold dark:text-[#DDE6ED]"
                : "hover:text-[#27374D] dark:hover:text-[#DDE6ED] transition-all duration-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Link
        href="/about"
        className="flex items-center space-x-3 border border-[#27374D] dark:border-[#DDE6ED] 
        border-opacity-25 hover:border-opacity-100 transition-all
        duration-300 hover:shadow-xl p-2 px-4 rounded-3xl"
      >
        <Image src={avatar} alt="avatar" className="rounded-full h-14 w-14" />
        <div>
          <p className="font-medium">Mehmet Bardakcı</p>
          <p className="text-zinc-400 text-sm">Frontend Developer</p>
        </div>
      </Link>
    </div>
  );
}
