import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header/page";
import Navbar from "./Navbar/page";

const tiroBangla = localFont({
  src: "/fonts/TiroBangla-Regular.ttf",
  variable: "--font-tiro-bangla",
  weight: "400",
  style: "normal",
});

const readexPro = localFont({
  src: "/fonts/ReadexPro-VariableFont_HEXP,wght.ttf",
  variable: "--font-readex-pro",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Lawrence View Hotel",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tiroBangla.variable} ${readexPro.variable} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
