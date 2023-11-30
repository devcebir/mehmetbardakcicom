import { IoIosArrowDown } from "react-icons/io";

export default function HomePageContainer() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <h5 className="text-xl ">
          Selam! 👋 Ben Mehmet. Klavyenin başında kodların arasında kaybolurken,
          bir yandan da kullanıcı deneyimini renklendirmeye çalışıyorum. Sadece
          bir kod yazıcısı değil, aynı zamanda bir kahve bağımlısı🤎 ve espri
          ustasıyım.💣 Ayrıca minimalist yaklaşımdan hoşlanıyorum.
        </h5>

        <div className="text-xl flex items-center justify-center gap-5">
          <p>Şimdi sizi aşağı alalım</p>
          <div className="animate-bounce w-10 h-10">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
