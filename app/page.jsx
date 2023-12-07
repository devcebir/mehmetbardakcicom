import ThemeComp from "@/components/themeComp";

export const metadata = {
  title: "Mehmet Bardakcı - Frontend Developer",
  description: "I am a Frontend Developer",
};

export default function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-5xl text-[#DDE6ED] dark:text-[#27374D] font-bold animate-pulse">
          Ana Sayfa
        </h2>
        <ThemeComp />
      </div>
    </div>
  );
}
