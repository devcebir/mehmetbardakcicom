import ThemeComp from "@/components/themeComp";

export const metadata = {
  title: "Yer İşaretleri - Mehmet Bardakcı",
  description: "Yer İşaretleri sayfası",
};
export default function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="">
        <ThemeComp />
      </div>
    </div>
  );
}
