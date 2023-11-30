"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatariki.png";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  HiOutlineHome,
  HiOutlinePencilSquare,
  HiOutlineBookmark,
} from "react-icons/hi2";
import { PiProjectorScreenChart } from "react-icons/pi";
import "./header.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`w-[20%] max-laptop:w-[10%] max-mobile:w-[10%] max-desktop:w-[25%] flex flex-col items-center justify-between max-laptop:justify-center my-5 pl-5`}
    >
      <div
        className="text-zinc-200 text-xl flex items-center justify-center gap-3 max-laptop:hidden py-2 px-4 rounded-2xl border border-zinc-800
      hover:bg-white hover:bg-opacity-10 transition-all duration-300"
      >
        <Link
          className="hover:text-zinc-400 transition-all duration-300"
          href="https://twitter.com/devcebir"
          target="_blank"
        >
          <RiTwitterXLine />
        </Link>
        <Link
          className="hover:text-zinc-400 transition-all duration-300"
          href="https://instagram.com/devcebir"
          target="_blank"
        >
          <SiInstagram />
        </Link>
        <Link
          className="hover:text-zinc-400 transition-all duration-300"
          href="https://linkedin.com/in/devcebir"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="hover:text-zinc-400 transition-all duration-300"
          href="https://github.com/devcebir"
          target="_blank"
        >
          <BsGithub />
        </Link>
      </div>

      <nav className="flex flex-col items-center justify-center gap-5 text-3xl font-medium ">
        <Link
          className={`hover:text-zinc-100 transition-all duration-300 hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-2xl  ${
            pathname === "/" ? "text-zinc-100" : "text-zinc-500"
          }`}
          href="/"
        >
          <HiOutlineHome className="hidden max-laptop:block" />
          <p className="max-laptop:hidden">Ana Sayfa</p>
        </Link>
        <Link
          className={`hover:text-zinc-100 transition-all duration-300 hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-2xl  ${
            pathname === "/blog" ? "text-zinc-100" : "text-zinc-500"
          }`}
          href="/blog"
        >
          <HiOutlinePencilSquare className="hidden max-laptop:block " />
          <p className="max-laptop:hidden">Blog</p>
        </Link>
        <Link
          className={`hover:text-zinc-100 transition-all duration-300 hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-2xl  ${
            pathname === "/projects" ? "text-zinc-100" : "text-zinc-500"
          }`}
          href="/projects"
        >
          <PiProjectorScreenChart className="hidden max-laptop:block" />
          <p className="max-laptop:hidden">Projeler</p>
        </Link>
        <Link
          className={`hover:text-zinc-100 transition-all duration-300 hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-2xl  ${
            pathname === "/lists" ? "text-zinc-100" : "text-zinc-500"
          }`}
          href="/lists"
        >
          <HiOutlineBookmark className="hidden max-laptop:block" />
          <p className="max-laptop:hidden">Yer İşaretleri</p>
        </Link>
      </nav>

      <Link href="/profile" className=" cursor-pointer  max-laptop:hidden ">
        <div className="flex rounded-3xl items-center justify-center gap-3 border border-zinc-800 hover:bg-white hover:bg-opacity-10 px-4 py-2 max-laptop:px-0 transition-all duration-300">
          <Image
            src={avatar}
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <div className="text-zinc-200">
            <p className=" font-medium max-laptop:text-sm">Mehmet Bardakcı</p>
            <p className="text-sm max-laptop:text-xs font-light text-zinc-400">
              Frontend Developer
            </p>
          </div>
        </div>
      </Link>
    </header>
  );
}
