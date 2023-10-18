"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarNew = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <nav className="relative bg-primary w-full text-white text-base p-3 z-[9999] ">
        {/* <!-- Flex Container For All Items --> */}
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <p>BS</p>

          {/* DESKTOP - LINKS */}
          <div className="hidden space-x-8 font-bold md:flex">
            <Link href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Home
            </Link>

            <Link href="#work" className="text-grayishViolet hover:text-veryDarkViolet">
              Work Projects
            </Link>

            <Link href="#personal" className="text-grayishViolet hover:text-veryDarkViolet">
              Personal Projects
            </Link>

            <Link href="#about" className="text-grayishViolet hover:text-veryDarkViolet">
              About
            </Link>

            <Link href="#contact" className="text-grayishViolet hover:text-veryDarkViolet">
              Contact
            </Link>

            <Link href="./files/Bartosz_Swierzynski.pdf" className="text-grayishViolet hover:text-veryDarkViolet">
              Resume
            </Link>
          </div>

          {/* HAMBURGER - MENU BUTTON */}
          <button
            id="menu-btn"
            type="button"
            className="block hamburger md:hidden focus:outline-none"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE - MENU */}
      <div
        id="menu"
        className={`${
          toggleMenu ? "translate-y-0 opacity-100" : "translate-y-[-400px] opacity-0-"
        } absolute p-6 rounded-lg bg-primary left-0 right-0 top-10 z-10 transition-all duration-500 ease-in-out overflow-y-hidden`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <Link href="#" className="w-full text-center">
            Home
          </Link>
          <Link href="#work" className="w-full text-center">
            Work Projects
          </Link>
          <Link href="#personal" className="w-full text-center">
            Personal Projects
          </Link>
          <Link href="#about" className="w-full border-gray-400 text-center">
            About
          </Link>
          <Link href="#contact" className="w-full text-center rounded-full bg-cyan">
            Contact
          </Link>
          <Link href="./files/Bartosz_Swierzynski.pdf" className="text-grayishViolet hover:text-veryDarkViolet" target="_blank">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
