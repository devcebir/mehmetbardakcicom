import { TbAtom2Filled } from "react-icons/tb";

export const metadata = {
  title: "Mehmet Bardakcı - Blog",
  description: "Mehmet Cardakcı - Blog",
};
export default function page() {
  return (
    <div className="w-full p-5 max-lg:p-5">
      <div className="bg-white h-full rounded-3xl flex flex-col items-center justify-center text-9xl font-semibold gap-5">
        <TbAtom2Filled className="rotate-infinite" />
        <p className="text-4xl font-bolf">Blog</p>
      </div>
    </div>
  );
}
