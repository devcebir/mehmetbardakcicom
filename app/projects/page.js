import KitchenAppImage from "@/images/kitchen-app.png";
import DappGateImage from "@/images/dappgate.png";
import Image from "next/image";
import Link from "next/link";
import { PiCodeBold } from "react-icons/pi";

export const metadata = {
  title: "Mehmet Bardakcı - Projeler",
};
 
const page = () => {
  return (
    <div className="page h-screen flex flex-col justify-center max-sm:my-24">
      <h2 className="font-bold text-6xl mb-10 max-xl:text-5xl max-sm:text-3xl">Projeler</h2>
      <div className="flex items-center gap-5 max-sm:flex-col max-sm:gap-8 ">
        <div className="flex flex-col gap-4 justify-center p-3 hover:bg-zinc-800 border border-zinc-900 w-[384px] max-sm:w-[310px] max-xsm:w-[280px] rounded-2xl transform transition-all duration-300">
          <Link href="https://kitchen-app-alpha.vercel.app/" target="_blank">
            <Image
              src={KitchenAppImage}
              alt="kitchen app"
              width={400}
              height={400}
              className="rounded-xl w-96 h-52 max-sm:w-80 max-sm:h-44 shadow-lg shadow-zinc-700"
            />
          </Link>

          <div>
            <h4 className="text-zinc-400 max-sm:text-sm">
              NEXT.JS - TAİLWİND CSS
            </h4>
            <Link href="https://kitchen-app-alpha.vercel.app/" target="_blank">
              <h3 className="font-extrabold text-2xl max-sm:text-xl">
                Kitchen App
              </h3>
            </Link>
            <p className="text-zinc-300 max-sm:text-sm">
              Lezzetin dijital dünyada buluştuğu, yenilikçi tasarım ve benzersiz
              içerikleriyle öne çıkan restoran websitesi.
            </p>

            <Link
              href="https://github.com/devcebir/kitchen-app"
              target="_blank"
              className="flex items-center justify-center max-sm:text-sm gap-3 mt-3 text-zinc-400 hover:text-white border-zinc-400 rounded-md hover:border-white transform transition-all duration-300 border-b-2 w-36 max-sm:w-32"
            >
              <PiCodeBold />
              <p className="">Source Code</p>
            </Link>
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col gap-4 justify-center p-3 hover:bg-zinc-800 border border-zinc-900 w-[400px] max-sm:w-[310px] max-xsm:w-[280px] rounded-2xl transform transition-all duration-300">
          <Link href="https://dapp-gate-clon.vercel.app/" target="_blank">
            <Image
              src={DappGateImage}
              alt="kitchen app"
              width={450}
              height={450}
              className="rounded-xl w-96 h-52 max-sm:w-80 max-sm:h-44 shadow-lg shadow-zinc-700"
            />
          </Link>

          <div>
            <h4 className="text-zinc-400 max-sm:text-sm">
              NEXT.JS - TAİLWİND CSS
            </h4>
            <Link href="https://dapp-gate-clon.vercel.app/" target="_blank">
              <h3 className="font-extrabold text-2xl max-sm:text-xl">
                DappGate - SuperApp
              </h3>
            </Link>
            <p className="text-zinc-300 max-sm:text-sm">
              DappGate.io isimli sitenin tekrardan yazılmış bir kopyası. Pratik
              amaçlı yeniden yazılıp yayınlandı.
            </p>

            <Link
              href="https://github.com/devcebir/dapp-gate-clon"
              target="_blank"
              className="flex items-center justify-center gap-3 mt-3 max-sm:text-sm text-zinc-400 hover:text-white border-zinc-400 rounded-md hover:border-white transform transition-all duration-300 border-b-2 w-36 max-sm:w-32"
            >
              <PiCodeBold />
              <p className="">Source Code</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
