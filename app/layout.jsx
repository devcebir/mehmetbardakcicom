import { Montserrat } from "next/font/google";
import "./globals.css";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={MontserratFont.className}>{children}</body>
    </html>
  );
}
