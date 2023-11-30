import HomePageContainer from "@/containers/homapge";
export const metadata = {
  title: "Mehmet Bardakcı - Frontend Developer",
  description: "Mehmet Cardakcı - Frontend Developer",
};

export default function page() {
  return (
    <div className="w-full p-5 h-screen">
      <div className="bg-white h-full rounded-3xl flex flex-col items-center text-center gap-5 px-40 pt-10">
        <HomePageContainer />
      </div>
    </div>
  );
}
