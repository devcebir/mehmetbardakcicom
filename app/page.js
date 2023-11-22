import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export const metadata = {
  title: "Mehmet Bardakcı - Frontend Devbeloper",
};
 
const page = () => {
  return (
    <div className="page h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-6xl font-bold max-sm:text-4xl max-xsm:text-2xl max-xsm:pt-2">
          Frontend Developer
        </h2>
        <div className="text-zinc-400 flex flex-col gap-5 text-2xl mt-10 max-sm:text-lg max-xsm:mt-2">
          <p>
            Selamlar, ben{" "}
            <span className="text-white font-semibold hover:text-amber-600 transform transition-all duration-300">
              Mehmet Bardakcı.
            </span>{" "}
            Web uygulamalarına ilgim, 2022 yılında başladı ve o zamandan beri bu
            alanda kendimi geliştirmeye adadım. Özellikle{" "}
            <span className="text-blue-500 font-semibold hover:text-blue-700 transform transition-all duration-300">
              React
            </span>{" "}
            ve{" "}
            <span className="text-white font-semibold hover:text-zinc-400 transform transition-all duration-300">
              Next.js
            </span>{" "}
            ile kullanıcı odaklı ve yenilikçi projeler geliştirmeye
            çalıştım. Bu süreçte, her proje üzerinde karşılaştığım zorlukları
            aşma ve teknik yeteneklerimi ileri düzeye taşıma fırsatı buldum.
            Sadece kendi gelişimime değil, aynı zamanda çevremdeki
            geliştiricilerin de yeteneklerini artırmalarına katkıda bulunmayı
            hedefliyorum.
          </p>

          <p>
            Gelecekte, teknolojinin hızla evrim geçirdiği bir ortamda, yeni
            trendleri benimseyerek ve öğrenmeye açık bir şekilde, web geliştirme
            dünyasındaki becerilerimi güçlendirmek istiyorum.
          </p>

          <div className="flex items-center gap-2 mt-5 max-sm:text-base">
            <p className="flex items-center gap-2">
              Projelerimi incelemek için <RiArrowRightSLine />
            </p>

            <Link
              href="/projects"
              className="border-b-2 font-semibold text-white hover:text-amber-600 hover:border-amber-600 transform transition-all duration-300"
            >
              Projeler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
