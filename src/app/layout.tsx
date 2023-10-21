import "./globals.css";
import type { Metadata } from "next";
import Navbar_ from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Bartosz Swierzynski - Portfolio",
  description: "Personal website with my projects and contact information",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// https://www.youtube.com/watch?v=optD7ns4ISQ - dark theme
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark text-primary overflow-x-hidden">
      <body className={`${poppins.className} bg-gray-200 dark:from-slate-800- dark:bg-slate-900`}>
        <Navbar_ />
        {children}
        {/* <div className="absolute bottom-0 left-0 right-0 z-[-1]"> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
