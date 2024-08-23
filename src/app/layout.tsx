import type { Metadata } from "next";
// import { Nunito } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import toast, { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  // console.log("Current user in layout.tsx is: ", currentUser);

  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Toaster />
        <Navbar user={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
