import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`flex bg-white text-black h-screen ${GeistSans.className}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
