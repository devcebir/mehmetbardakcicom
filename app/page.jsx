import Link from "next/link";

export const metadata = {
  title: "Mehmet Bardakcı - Frontend Developer",
  description: "Mehmet Bernardakcı - Frontend Developer",
};

export default function page() {
  return (
    <div className="relative h-screen px-10 flex flex-col items-center justify-center text-center max-md:px-4">
      <div
        className="bg-gradient-to-br animated-bg-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 from-[#183D3D] to-[#183D3D] 
      opacity-60 absolute inset-0 filter blur-3xl rounded-full w-[35rem] h-[35rem] max-xxl:w-[30rem] max-xxl:h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]
      max-xsm:w-[15rem] max-xsm:h-[15rem] z-0 animation"
      ></div>
      <div className="relative z-10 flex flex-col gap-7 items-center">
        <h3
          className="absolute select-none text-7xl font-black opacity-20 animated-gradient blur-sm tracking-wider max-xxl:text-6xl 
        max-md:text-5xl max-sm:text-3xl max-xsm:text-2xl"
        >
          Frontend Developer
        </h3>
        <h3 className="text-6xl font-bold text-white select-none max-xxl:text-5xl max-md:text-4xl max-sm:text-2xl max-xsm:text-xl mt-5 max-md:mt-3">
          Frontend Developer
        </h3>
        <div
          className="text-3xl text-[#F7FFE5] px-60 font-medium max-xxl:px-20 max-xl:px-10 max-xxl:text-2xl max-lg:px-20 max-sm:px-0 
        max-sm:text-base flex flex-col gap-2 max-md:text-xl max-xsm:text-sm"
        >
          <p className="">
            Selamlar, ben Mehmet Bardakcı. 2022 yılından bu yana web
            geliştirmeyle ilgileniyorum.
          </p>
          <p>Tasarım yapmak ve kodlamaktan büyük keyif alıyorum. </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 max-sm:text-sm max-xsm:text-xs">
        <Link href="/projects" className="relative z-10 mt-10">
          <button className="bg-white text-[#040D12] rounded-lg py-2 px-4 font-semibold">
            Projeler
          </button>
        </Link>

        <Link
          href="https://drive.google.com/file/d/14N_5eZ8nSvSwaKuILGrx_Edu7lNymII_/view?usp=drive_link"
          target="_blank"
        >
          <button
            className="border border-white text-white rounded-lg py-2 px-4 font-semibold hover:bg-white hover:text-[#040D12]
           transition-all duration-500 relative z-10 mt-10"
          >
            Özgeçmiş
          </button>
        </Link>
      </div>
    </div>
  );
}
