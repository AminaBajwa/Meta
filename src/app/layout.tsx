import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainMenu from "./Components/MainMenu";
import Footer from "./Components/Footer";
import StarsCanvas from "./Components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaXperts",
  description: "Elevate your business with MetaXperts. Explore our portfolio for cutting-edge software solutions, crafted for innovation and success.",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <MainMenu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
