import Header from "@/components/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${MontserratFont.className}`}
    >
      <body className="flex flex-col justify-between h-screen bg-[#040D12]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 