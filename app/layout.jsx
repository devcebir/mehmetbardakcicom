import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/header";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`flex bg-[#27374D] dark:bg-[#DDE6ED] ${PoppinsFont.className}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
