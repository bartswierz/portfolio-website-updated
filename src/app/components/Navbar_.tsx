"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavbarNew = () => {
  const [active, setActive] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Function to handle scroll events
    const handleScroll = () => {
      var currentScrollPos = window.pageYOffset;

      // IF USER IS SCROLLING DOWN - HIDE NAVBAR
      if (window.scrollY > prevScrollPos) {
        setIsNavbarVisible(false);
      } else {
        //USER IS SCROLLING UP - DISPLAY NAVBAR
        setIsNavbarVisible(true);
      }
      // Update value for the next scroll event comparison
      prevScrollPos = currentScrollPos;
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // on hover: underline will expand from the the left to the right
  const underlineStyle = "block max-w-0 group-hover:max-w-full transition-all duration-300 h-[3px] bg-brand";

  return (
    <div>
      <nav
        className={`fixed relative- bg-primary w-full text-white text-base p-3 z-[9999] transition-transform duration-300
      ${isNavbarVisible ? `translate-y-0` : `translate-y-[-100%]`}`}
      >
        {/* <!-- Flex Container For All Items --> */}
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <p>BS</p>

          {/* DESKTOP - LINKS */}
          <div className="hidden space-x-8 font-bold md:flex">
            <Link href="#" className="">
              Home
            </Link>

            <Link href="#work" className="">
              Work Projects
            </Link>

            <Link href="#personal" className="">
              Personal Projects
            </Link>

            <Link href="#about" className="">
              About
            </Link>

            <Link href="#contact" className="">
              Contact
            </Link>

            <Link href="./files/Bartosz_Swierzynski.pdf" className="">
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
          toggleMenu ? "translate-y-0 opacity-100" : "translate-y-[-120%] opacity-0-"
        } fixed absolute- p-6 rounded-lg bg-primary left-0 right-0 top-10 z-10 transition-all duration-500 ease-in-out overflow-y-hidden`}
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
