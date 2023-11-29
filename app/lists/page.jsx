import { TbAtom2Filled } from "react-icons/tb";

export const metadata = {
  title: "Mehmet Bardakcı - Yer İşaretleri",
  description: "Mehmet Cardakcı - Yer İşaretleri",
};
export default function page() {
  return (
    <div className="w-full p-5 max-lg:p-5">
      <div className="bg-white h-full rounded-3xl flex flex-col items-center justify-center text-9xl font-semibold gap-5">
        <TbAtom2Filled className="rotate-infinite" />
        <p className="text-4xl font-bolf">Yer İşaretleri</p>
      </div>
    </div>
  );
}
