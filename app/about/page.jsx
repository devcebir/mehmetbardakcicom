import Link from "next/link";

export const metadata = {
  title: "Mehmet Bardakcı - Hakkımda",
};

export default function ProjectsPage() {
  return (
    <div className="relative z-10 h-screen px-10 flex flex-col items-center justify-center text-center gap-20 max-xxl:gap-10 max-xl:gap-5 max-md:my-14 max-sm:my-32 max-xsm:my-56">
      <div
        className="bg-gradient-to-br animated-bg-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 from-[#183D3D] to-[#183D3D] 
      opacity-60 absolute inset-0 filter blur-3xl rounded-full w-[35rem] h-[35rem] max-xxl:w-[30rem] max-xxl:h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]
      max-xsm:w-[15rem] max-xsm:h-[15rem] z-0 animation"
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <h3
          className="absolute select-none text-7xl font-black opacity-20 animated-gradient blur-sm tracking-wider max-xxl:text-6xl max-lg:text-4xl
        max-md:text-5xl max-sm:text-4xl max-xsm:text-2xl"
        >
          Hakkımda
        </h3>
        <h3 className="text-6xl font-bold text-white select-none max-xxl:text-5xl max-md:text-4xl max-sm:text-3xl mt-5 max-md:mt-3">
          Hakkımda
        </h3>
      </div>

      <div className="text-white relative z-10 px-96 max-xxl:px-72 max-xl:px-40 max-lg:px-20 max-md:px-2 max-sm:px-0 max-lg:text-base text-xl text-start flex flex-col gap-7">
        <p>
          Selamlar, ben Mehmet Bardakcı. 2022 yılından bu yana web geliştirme
          sektöründe deneyim kazanmaktayım. Geliştirme yaptığım teknolojiler
          arasında React, Next.js, Tailwind CSS, Material UI ve Bootstrap gibi
          öncüler bulunmaktadır.
        </p>

        <p>
          Çalışma prensibim, teknolojik gelişmeleri yakından takip ederek, proje
          gereksinimlerini en iyi şekilde karşılamak ve müşterilere değerli
          çözümler sunmaktır. Bu anlamda, her bir projede titizlikle planlama
          yapar ve işleri zamanında ve bütçe içinde tamamlamaya özen gösteririm.
        </p>

        <p>
          Dinamik ve etkileşimli web uygulamaları oluşturmak, benim için hem bir
          tutku hem de sorumluluktur. Projelerimde estetik ve kullanıcı dostu
          tasarımları ön planda tutarken, aynı zamanda performans ve güvenlik
          konularına da özel bir önem veririm.
        </p>

        <p>
          Siz de işinizi daha modern ve etkileyici bir web varlığına taşımak
          istiyorsanız, teknoloji ile entegre edilmiş özelleştirilmiş çözümler
          sunmak üzere birlikte çalışmayı düşünebiliriz. Detaylı bir görüşme
          için benimle{" "}
          <Link
            href="/contact"
            className="underline decoration-[#5c8374] underline-offset-4 hover:text-[#5c8374] transition-all duration-300"
          >
            iletişim
          </Link>
          e geçmekten çekinmeyin.
        </p>
      </div>
    </div>
  );
}
