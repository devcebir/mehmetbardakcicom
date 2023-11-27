import Image from "next/image";
import Link from "next/link";
import furniro from "@/images/furniro.png";
import { LuCode2 } from "react-icons/lu";

export const metadata = {
  title: "Mehmet Bardakcı - Projeler",
};

export default function ProjectsPage() {
  return (
    <div
      className="relative z-10 h-screen px-10 max-sm:px-1 flex flex-col items-center justify-center text-center gap-20 max-xxl:gap-10 max-md:my-36
    max-base:my-72"
    >
      <div
        className="bg-gradient-to-br animated-bg-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 from-[#183D3D] 
        to-[#183D3D] opacity-60 absolute inset-0 filter blur-3xl rounded-full w-[35rem] h-[35rem] max-xxl:w-[30rem] max-xxl:h-[30rem] 
        max-sm:w-[20rem] max-sm:h-[20rem] max-xsm:w-[15rem] max-xsm:h-[15rem] z-0 animation"
      ></div>
      <div className="relative z-10 flex flex-col gap-7 items-center">
        <h3
          className="absolute select-none text-7xl font-black opacity-20 animated-gradient blur-sm tracking-wider max-xxl:text-6xl 
        max-md:text-5xl max-sm:text-4xl max-xsm:text-2xl"
        >
          Projeler
        </h3>
        <h3 className="text-6xl font-bold text-white select-none max-xxl:text-5xl max-md:text-4xl max-sm:text-3xl mt-5 max-md:mt-3">
          Projeler
        </h3>
        <p
          className="text-3xl text-[#F7FFE5] px-60 font-medium max-xxl:text-2xl max-xl:xl max-lg:text-base max-sm:text-base
        max-xl:px-10 max-xsm:px-1"
        >
          Bu sayfada şimdiye kadar geliştirmiş olduğum projeler yer almaktadır.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div
          className="flex flex-col gap-4 justify-center p-3 hover:bg-zinc-200 hover:bg-opacity-5 border border-zinc-600 rounded-2xl transform 
        transition-all duration-300 w-[22rem] max-xxl:w-[20rem] max-xl:w-[17rem] max-lg:w-[14rem]"
        >
          <Link href="#" target="_blank">
            <Image
              src={furniro}
              alt="furniro"
              width={400}
              height={400}
              className="rounded-xl shadow-lg shadow-zinc-700"
            />
          </Link>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-zinc-400 text-sm max-sm:text-xs">
              NEXT.JS - TAİLWİND CSS
            </h4>
            <Link href="#" target="_blank">
              <h3 className="font-bold text-2xl text-white max-sm:text-xl">
                Proje İsmi
              </h3>
            </Link>
            <p className="text-zinc-300 max-lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptas autem exercitationem.
            </p>

            <Link
              href="#"
              target="_blank"
              className="flex items-center justify-center max-sm:text-sm gap-3 mt-3 text-zinc-400 hover:text-white border-zinc-400 
              rounded-md hover:border-white transform transition-all duration-300 border-b-2 w-36 max-sm:w-32"
            >
              <LuCode2 className="text-xl" />

              <p className="">Source Code</p>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 justify-center p-3 hover:bg-zinc-200 hover:bg-opacity-5 border border-zinc-600 rounded-2xl transform 
        transition-all duration-300 w-[22rem] max-xxl:w-[20rem] max-xl:w-[17rem] max-lg:w-[14rem]"
        >
          <Link href="#" target="_blank">
            <Image
              src={furniro}
              alt="furniro"
              width={400}
              height={400}
              className="rounded-xl shadow-lg shadow-zinc-700"
            />
          </Link>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-zinc-400 text-sm max-sm:text-xs">
              NEXT.JS - TAİLWİND CSS
            </h4>
            <Link href="#" target="_blank">
              <h3 className="font-bold text-2xl text-white max-sm:text-xl">
                Proje İsmi
              </h3>
            </Link>
            <p className="text-zinc-300 max-lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptas autem exercitationem.
            </p>

            <Link
              href="#"
              target="_blank"
              className="flex items-center justify-center max-sm:text-sm gap-3 mt-3 text-zinc-400 hover:text-white border-zinc-400 
              rounded-md hover:border-white transform transition-all duration-300 border-b-2 w-36 max-sm:w-32"
            >
              <LuCode2 className="text-xl" />

              <p className="">Source Code</p>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 justify-center p-3 hover:bg-zinc-200 hover:bg-opacity-5 border border-zinc-600 rounded-2xl transform 
        transition-all duration-300 w-[22rem] max-xxl:w-[20rem] max-xl:w-[17rem] max-lg:w-[14rem]"
        >
          <Link href="#" target="_blank">
            <Image
              src={furniro}
              alt="furniro"
              width={400}
              height={400}
              className="rounded-xl shadow-lg shadow-zinc-700"
            />
          </Link>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-zinc-400 text-sm max-sm:text-xs">
              NEXT.JS - TAİLWİND CSS
            </h4>
            <Link href="#" target="_blank">
              <h3 className="font-bold text-2xl text-white max-sm:text-xl">
                Proje İsmi
              </h3>
            </Link>
            <p className="text-zinc-300 max-lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptas autem exercitationem.
            </p>

            <Link
              href="#"
              target="_blank"
              className="flex items-center justify-center max-sm:text-sm gap-3 mt-3 text-zinc-400 hover:text-white border-zinc-400 
              rounded-md hover:border-white transform transition-all duration-300 border-b-2 w-36 max-sm:w-32"
            >
              <LuCode2 className="text-xl" />

              <p className="">Source Code</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
