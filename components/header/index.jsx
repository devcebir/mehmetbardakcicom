"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import avatar from "@/public/avatar.png";
import Link from "next/link";
import { TbAtom2 } from "react-icons/tb";
import { TbAtom2Filled } from "react-icons/tb";

import { PiProjectorScreenChart } from "react-icons/pi";
import { PiProjectorScreenChartBold } from "react-icons/pi";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { PiPencilSimpleLineFill } from "react-icons/pi";

import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Ana Sayfa",
      path: "/",
      icon: <TbAtom2 />,
      activeIcon: <TbAtom2Filled />,
    },
    {
      name: "Projeler",
      path: "/projects",
      icon: <PiProjectorScreenChart />,
      activeIcon: <PiProjectorScreenChartBold />,
    },

    {
      name: "Blog",
      path: "/blog",
      icon: <PiPencilSimpleLineDuotone />,
      activeIcon: <PiPencilSimpleLineFill />,
    },
    {
      name: "Yer İşaretleri",
      path: "/bookmarks",
      icon: <GoBookmark />,
      activeIcon: <GoBookmarkFill />,
    },
  ];

  return (
    <header className="w-72 border-r-[0.5px] bg-zinc-50 p-2 text-sm flex flex-col">
      <Link
        href="/"
        className="flex items-center justify-start p-2 gap-2 
      text-sm hover:bg-gray-200 rounded-md transition-colors duration-300"
      >
        <Image
          src={avatar}
          alt="Mehmet Bardakcı - Fotoğraf"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="font-semibold tracking-tight">Mehmet Bardakcı</h1>
          <p className="text-gray-600">Frontend Developer</p>
        </div>
      </Link>

      <nav className="mt-3 p-2">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${
                pathname === link.path
                  ? "bg-gray-200 p-1 rounded-md"
                  : "hover:bg-gray-200 p-1 rounded-md transition-colors duration-300"
              }`}
            >
              <Link
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "flex items-center gap-2 py-1 px-2 bg-gray-200 p-1 rounded-md font-semibold"
                    : "flex items-center gap-2 py-1 px-2 font-medium hover:bg-gray-200 p-1 rounded-md transition-colors duration-300"
                }`}
              >
                <span className="text-lg">
                  {pathname === link.path ? link.activeIcon : link.icon}
                </span>{" "}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="h-[0.5px] bg-gray-200 w-full" />

      <div>
        
      </div>
    </header>
  );
}
