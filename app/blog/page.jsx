import ThemeComp from "@/components/themeComp";

export const metadata = {
  title: "Blog - Mehmet Bardakcı",
  description: "Blog sayfası",
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