import Link from "next/link";
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
 
const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-2 max-sm:py-7 max-xsm:pt-5 border-t-2 rounded-xl border-zinc-900 p-2 max-sm:border-none max-sm:flex-col max-sm:gap-3 max-sm:justify-center">
      <h4 className="text-gray-400 text-lg flex items-center gap-1">
        <p className="max-sm:hidden">Design by</p>{" "}
        <span className="text-white font-semibold hover:text-amber-600 transform transition-all duration-300 ">
          Mehmet Bardakcı
        </span>
      </h4>

      <div className="flex items-center text-2xl max-sm:text-xl gap-3">
        <Link
          target="_blank"
          className="hover:text-amber-600 transform transition-all duration-300"
          href="https://twitter.com/devcebir"
        >
          <RiTwitterXLine />
        </Link>
        <Link
          target="_blank"
          className="hover:text-amber-600 transform transition-all duration-300"
          href="https://www.instagram.com/devcebir"
        >
          <RiInstagramLine />
        </Link>
        <Link
          target="_blank"
          className="hover:text-amber-600 transform transition-all duration-300"
          href="https://github.com/devcebir"
        >
          <RiGithubFill />
        </Link>
        <Link
          target="_blank"
          className="hover:text-amber-600 transform transition-all duration-300"
          href="https://www.linkedin.com/in/devcebir"
        >
          <RiLinkedinBoxFill />
        </Link>
        <Link
          target="_blank"
          className="hover:text-amber-600 transform transition-all duration-300"
          href="mailto:bardakcimehmetdev@gmail.com"
        >
          <HiOutlineMail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
