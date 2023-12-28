export const metadata = {
  title: "Mehmet Bardakcı",
  description: "I am a Frontend Developer",
};

export default function page() {
  return (
    <div className="flex flex-col flex-1 h-screen ml-72 max-[768px]:ml-0 px-96 pt-24 max-[1568px]:px-64 max-[1024px]:px-28 max-[768px]:px-5 max-[768px]:pt-20">
      <div className="flex flex-col gap-5">
        <p className="leading-7">
          Selam! Ben Mehmet. 👋 İşte karşında, kodların ve tasarımın ardındaki
          yüz. Ancak bu yüz, sadece kodlamadan ibaret değil. Bir kitap kapağının
          ardında kaybolmayı, tarihin derinliklerine dalıp geçmişle sohbet
          etmeyi ve hayatı mümkün olduğunca basitleştirmeyi seven biriyim,
          sadelikten yanayım.
        </p>

        <p className="leading-7">
          Bu köşede, hem kodlama dünyasından hem de kitapların ve tarihin beni
          götürdüğü yerlerden bahsedeceğim. Kodların ve kelimelerin içinde,
          sadece bir tık ötedeyim. 🚀
        </p>
      </div>
    </div>
  );
}
