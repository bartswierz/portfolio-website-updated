import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar_ from "./components/Navbar";
// import { DarkThemeToggle, Flowbite } from "flowbite-react";
// import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "flowbite";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartosz Swierzynski - Portfolio",
  description: "Personal website with my projects and contact information",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// https://www.youtube.com/watch?v=optD7ns4ISQ - dark theme
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark text-primary">
      <body className={`${poppins.className} bg-gray-200 dark:from-slate-800- dark:bg-slate-900 `}>
        <Navbar_ />
        {/* <Providers> */}
        {/* <ThemeSwitcher /> */}
        {children}
        {/* </Providers> */}
        <Footer />
        {/* <script async src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script> */}
      </body>
    </html>
  );
}
