export const metadata = {
  title: "Mehmet Bardakcı",
  description: "I am a Frontend Developer",
};
import ThemeComp from "@/components/themeComp";
import { TbAtom2Filled } from "react-icons/tb";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <ThemeComp />
    </div>
  );
}
