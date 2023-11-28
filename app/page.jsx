export const metadata = {
  title: "Mehmet Bardakcı - Frontend Developer",
  description: "Mehmet Cardakcı - Frontend Developer",
};

import { FaReact } from "react-icons/fa";

export default function page() {
  return (
    <div class="flex flex-col items-center justify-center h-screen gap-5 select-none">
      <p class="animated-gradient text-7xl font-semibold max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center">
        Yakında yeniden yayında...
      </p>

      <FaReact className="text-9xl max-sm:text-8xl font-semibold custom-icon text-[#051111b6]" />
    </div>
  );
}
