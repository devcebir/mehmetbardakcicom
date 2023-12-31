import { GeistSans } from "geist/font/sans";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
