import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`flex max-[768px]:flex-col bg-white dark:bg-black text-black dark:text-white h-screen selection:bg-gray-300 dark:selection:bg-gray-700 ${GeistSans.className}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
