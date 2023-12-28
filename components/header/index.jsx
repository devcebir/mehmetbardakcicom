"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import avatar from "@/public/avatar.png";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import { TbAtom2 } from "react-icons/tb";
import { TbAtom2Filled } from "react-icons/tb";

import { PiProjectorScreenChart } from "react-icons/pi";
import { PiProjectorScreenChartBold } from "react-icons/pi";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { PiPencilSimpleLineFill } from "react-icons/pi";

import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";

import "./styles.css";

import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useState } from "react";
import ThemeComp from "../themeComp";

export default function Header() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

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
      name: "Yazılar",
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

  const navSocialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/devcebir",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/devcebir",
      icon: <FaInstagram />,
    },
    {
      name: "Github",
      href: "https://github.com/devcebir",
      icon: <FaGithub />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/devcebir/",
      icon: <FaLinkedinIn />,
    },
  ];

  const handleClick = () => {
    setClicked(!clicked);
  };

  const linkHandleClick = () => {
    setClicked(false);
  };

  return (
    <div>
      <div className="hidden max-[768px]:block border-b-[0.5px] border-gray-300 dark:border-gray-500 px-4 py-2 fixed z-50 bg-white dark:bg-black w-full">
        <button className="flex" onClick={handleClick}>
          <IoMenu className="text-2xl" />
        </button>
      </div>

      {clicked && (
        <header
          className={`acilisMenu hidden max-[768px]:block fixed z-50 border-r-[0.5px] top-[40.5px] dark:border-gray-500 bg-zinc-50 dark:bg-[#191919] p-2 text-sm flex-col h-screen `}
        >
          <div className="flex items-center justify-between pr-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors duration-300">
            <Link
              href="/"
              onClick={linkHandleClick}
              className="flex items-center justify-start p-2 gap-2
            text-sm"
            >
              <Image
                src={avatar}
                alt="Mehmet Bardakcı - Fotoğraf"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="font-semibold tracking-tight dark:text-white">
                  Mehmet Bardakcı
                </h1>
                <p className="text-gray-600 dark:text-gray-200">
                  Frontend Developer
                </p>
              </div>
            </Link>
            <ThemeComp />
          </div>

          <nav className="mt-3 p-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`${
                    pathname === link.path
                      ? "bg-gray-200 dark:bg-gray-600 p-1 rounded-md dark:text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-600 p-1 dark:text-white rounded-md transition-colors duration-300"
                  }`}
                >
                  <Link
                    href={link.path}
                    onClick={linkHandleClick}
                    className={`${
                      pathname === link.path
                        ? "flex items-center gap-2 py-1 px-2 p-1 rounded-md font-semibold"
                        : "flex items-center gap-2 py-1 px-2 font-medium p-1 rounded-md transition-colors duration-300"
                    }`}
                  >
                    <span className="text-lg">
                      {pathname === link.path ? link.activeIcon : link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-[0.5px] bg-gray-200 dark:bg-gray-500 w-full" />

          <div className="flex flex-col gap-3 mt-4 px-2">
            <p className="text-gray-700 dark:text-gray-300 select-none text-xs">
              Sosyal Medya
            </p>
            <ul className="flex flex-col gap-2">
              {navSocialLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:bg-gray-200 p-1 rounded-md transition-colors duration-300 hover:dark:bg-gray-600"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-2 py-1 px-2 font-medium p-1 rounded-md transition-colors duration-300"
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      )}
      <header className="w-72 border-r-[0.5px] dark:border-gray-500 bg-zinc-50 dark:bg-[#191919] p-2 text-sm flex-col max-[768px]:hidden fixed h-screen">
        <div className="flex items-center justify-between pr-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors duration-300">
          <Link
            href="/"
            onClick={linkHandleClick}
            className="flex items-center justify-start p-2 gap-2
            text-sm "
          >
            <Image
              src={avatar}
              alt="Mehmet Bardakcı - Fotoğraf"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold tracking-tight dark:text-white">
                Mehmet Bardakcı
              </h1>
              <p className="text-gray-600 dark:text-gray-200">
                Frontend Developer
              </p>
            </div>
          </Link>
          <ThemeComp />
        </div>

        <nav className="mt-3 p-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`${
                  pathname === link.path
                    ? "bg-gray-200 dark:bg-gray-600 p-1 rounded-md dark:text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-600 p-1 dark:text-white rounded-md transition-colors duration-300"
                }`}
              >
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "flex items-center gap-2 py-1 px-2 p-1 rounded-md font-semibold"
                      : "flex items-center gap-2 py-1 px-2 font-medium p-1 rounded-md transition-colors duration-300"
                  }`}
                >
                  <span className="text-lg">
                    {pathname === link.path ? link.activeIcon : link.icon}
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="h-[0.5px] bg-gray-200 dark:bg-gray-500 w-full" />

        <div className="flex flex-col gap-3 mt-4 px-2">
          <p className="text-gray-700 dark:text-gray-300 select-none text-xs">
            Sosyal Medya
          </p>
          <ul className="flex flex-col gap-2">
            {navSocialLinks.map((link) => (
              <li
                key={link.name}
                className="hover:bg-gray-200 p-1 rounded-md transition-colors duration-300 hover:dark:bg-gray-600"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-2 py-1 px-2 font-medium p-1 rounded-md transition-colors duration-300"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
