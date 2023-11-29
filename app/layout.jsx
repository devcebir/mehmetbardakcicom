import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`flex h-screen bg-zinc-900 ${PoppinsFont.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
