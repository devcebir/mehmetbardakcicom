import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${PoppinsFont.className}`}>{children}</body>
    </html>
  );
}
