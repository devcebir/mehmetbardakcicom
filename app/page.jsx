export const metadata = {
  title: "Mehmet Bardakcı",
  description: "I am a Frontend Developer",
};

export default function page() {
  return (
    <div className="flex flex-col flex-1 h-screen px-52 pt-24 max-[1024px]:px-28 max-[768px]:px-5 max-[768px]:pt-12">
      <p className="font-bold text-xl mb-2">Ana Sayfa</p>
      <p className="leading-7">
        Merhaba, ben Mehmet. 👋 Kodların arasında kaybolan, sadeliği seven bir
        yazılım geliştiricisiyim. Aynı zamanda tarih meraklısıyım. Seninle
        paylaşmak istediğim bu küçük dünyada, kodlarımın ve geçmişin izlerinin
        arasında geziniyorum. Hoş geldin! 🙃
      </p>
    </div>
  );
}
