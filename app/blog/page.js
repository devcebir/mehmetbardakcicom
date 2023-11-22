import { PiCodeBlockBold } from "react-icons/pi";

export const metadata = {
  title: "Mehmet Bardakcı - Blog",
};

const page = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-5">
      <p className="text-9xl font-bold -sm:text-9xl loading-gradient">
        <PiCodeBlockBold />
      </p>
    </div>
  );
};

export default page;
 