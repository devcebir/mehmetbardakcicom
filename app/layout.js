import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`transition-all ease-in-out duration-500 ${PoppinsFont.className}`}
    >
      <body className="px-[450px] max-sm:px-5 max-lg:px-20 max-2xl:px-40 max-md:px-20 bg-zinc-950 text-white flex flex-col justify-between h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 