import type { Metadata } from "next";
// import { Nunito } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";
import Head from "next/head";

// const font = Nunito({
//   subsets: ["latin"],
//   display: "swap",
//   adjustFontFallback: false,
// });

const font = localFont({
  src: "../font/normal.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "A clone of the Airbnb website developed using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
