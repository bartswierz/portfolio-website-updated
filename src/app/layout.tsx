import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar_ from "./components/Navbar";
// import { DarkThemeToggle, Flowbite } from "flowbite-react";
// import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "flowbite";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartosz Swierzynski - Portfolio",
  description: "Personal website with my projects and contact information",
};

// https://www.youtube.com/watch?v=optD7ns4ISQ - dark theme
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar_ />
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
        {/* <script src="../path/to/flowbite/dist/flowbite.js" async></script> */}
      </body>
    </html>
  );
}
