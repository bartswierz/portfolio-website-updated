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
        setToggleMenu(false);
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
        className={`fixed bg-primary w-full text-white text-base p-3 z-[9999] transition-transform duration-300
      ${isNavbarVisible ? `translate-y-0` : `translate-y-[-100%]`}`}
      >
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-dark cursor-default">
            &lt;BS /&gt;
          </span>

          {/* DESKTOP - LINKS */}
          <div className="hidden space-x-8 font-bold md:flex">
            <Link href="#" className="group text-gray-300 transition duration-300" onClick={() => setActive("home")}>
              <p className={`${active === "home" ? "text-gray-200" : ""} `}>Home</p>
              <span className={`${underlineStyle} ${active === "home" ? "max-w-full" : ""}`}></span>
            </Link>

            <Link href="#work" className="group text-gray-300 transition duration-300" onClick={() => setActive("work")}>
              <p className={`${active === "work" ? "text-gray-200" : ""} `}>Work Projects</p>
              <span className={`${underlineStyle} ${active === "work" ? "max-w-full" : ""}`}></span>
            </Link>

            <Link href="#personal" className="group text-gray-300 transition duration-300" onClick={() => setActive("personal")}>
              <p className={`${active === "personal" ? "text-gray-200" : ""} `}>Personal Projects</p>
              <span className={`${underlineStyle} ${active === "personal" ? "max-w-full" : ""}`}></span>
            </Link>

            <Link href="#about" className="group text-gray-300 transition duration-300" onClick={() => setActive("about")}>
              <p className={`${active === "about" ? "text-gray-200" : ""} `}>About</p>
              <span className={`${underlineStyle} ${active === "about" ? "max-w-full" : ""}`}></span>
            </Link>

            <Link href="#contact" className="group text-gray-300 transition duration-300" onClick={() => setActive("contact")}>
              <p className={`${active === "contact" ? "text-gray-200" : ""} `}>Contact</p>
              <span className={`${underlineStyle} ${active === "contact" ? "max-w-full" : ""}`}></span>
            </Link>

            <Link href="./files/Bartosz_Swierzynski.pdf" className="group text-gray-300 transition duration-300" target="_blank">
              <p className={`${active === "resume" ? "text-gray-200" : ""} `}>Resume</p>
              <span className={`${underlineStyle} ${active === "resume" ? "max-w-full" : ""}`}></span>
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
          toggleMenu ? "translate-y-0 opacity-100" : "translate-y-[-120%]"
        } fixed p-3 rounded-lg bg-primary left-0 right-0 top-10 z-10 transition-all duration-500 ease-in-out overflow-y-hidden`}
      >
        <div className="flex flex-col items-center justify-center w-full font-bold text-white rounded-sm divide-y divide-solid text-center">
          <Link href="#" className="w-full p-2" onClick={() => setActive("home")}>
            {/* Home */}
            <p
              className={`hover:text-highlight transition-colors duration-300
            ${active === "home" ? "text-highlight" : ""} `}
            >
              Home
            </p>
          </Link>
          <Link href="#work" className="w-full p-2" onClick={() => setActive("work")}>
            <p
              className={`hover:text-highlight transition-colors duration-300 
            ${active === "work" ? "text-highlight" : ""} `}
            >
              Work Projects
            </p>
          </Link>
          <Link href="#personal" className="w-full p-2">
            <p
              className={`hover:text-highlight transition-colors duration-300 
            ${active === "personal" ? "text-highlight" : ""} `}
            >
              Personal Projects
            </p>
          </Link>
          <Link href="#about" className="w-full p-2">
            <p
              className={`hover:text-highlight transition-colors duration-300 
              ${active === "about" ? "text-highlight" : ""} `}
            >
              About
            </p>
          </Link>
          <Link href="#contact" className="w-full p-2">
            <p
              className={`hover:text-highlight transition-colors duration-300 
              ${active === "contact" ? "text-highlight" : ""} `}
            >
              Personal Projects
            </p>
          </Link>
          <Link
            href="./files/Bartosz_Swierzynski.pdf"
            className="w-full  text-center p-2 hover:text-highlight transition-colors duration-300"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
