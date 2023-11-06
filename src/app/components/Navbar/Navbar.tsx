"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

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

  // TODO pass the active type
  function handleMobileLink(linkName: string) {
    setActive(linkName);
    setToggleMenu(false); //closes menu when user clicks a link
  }

  return (
    <div>
      <nav
        className={`fixed bg-primary w-full text-white text-base p-3- z-[9999] transition-transform duration-300 h-[52px] px-3
        ${isNavbarVisible ? `translate-y-0` : `translate-y-[-100%]`} 
        ${toggleMenu ? "opacity-100" : "shadow-navbar opacity-90"} align-middle flex items-center`} //MENU IS NOT OPENED -> ADD SHADOW TO BOTTOM OF NAVBAR
        // ${!toggleMenu && "shadow-navbar"}`} //MENU IS NOT OPENED -> ADD SHADOW TO BOTTOM OF NAVBAR
      >
        <div className="flex items-center justify-between w-full">
          {/* BRAND LOGO */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-dark cursor-default">
            &lt;BS /&gt;
          </span>

          {/* DESKTOP - LINKS */}
          <div className="hidden space-x-8 md:flex align-bottom">
            <a
              href="#home"
              className="group text-gray-400 hover:text-gray-100 font-semibold transition duration-300"
              onClick={() => setActive("home")}
            >
              <p className={`${active === "home" ? "text-gray-100" : ""} `}>Home</p>
              <span className={`${underlineStyle} ${active === "home" ? "max-w-full" : ""}`}></span>
            </a>

            <a
              href="#work"
              className="group text-gray-400 hover:text-gray-100 font-semibold transition duration-300"
              onClick={() => setActive("work")}
            >
              <p className={`${active === "work" ? "text-gray-100" : ""} `}>Work Projects</p>
              <span className={`${underlineStyle} ${active === "work" ? "max-w-full" : ""}`}></span>
            </a>

            <a
              href="#personal"
              className="group text-gray-400 hover:text-gray-100 font-semibold transition duration-300"
              onClick={() => setActive("personal")}
            >
              <p className={`${active === "personal" ? "text-gray-100" : ""} `}>Personal Projects</p>
              <span className={`${underlineStyle} ${active === "personal" ? "max-w-full" : ""}`}></span>
            </a>

            <a
              href="#about"
              className="group text-gray-400 hover:text-gray-100 font-semibold transition duration-300"
              onClick={() => setActive("about")}
            >
              <p className={`${active === "about" ? "text-gray-100" : ""} `}>About</p>
              <span className={`${underlineStyle} ${active === "about" ? "max-w-full" : ""}`}></span>
            </a>

            <a
              href="#contact"
              className="group text-gray-400 hover:text-gray-100 font-semibold transition duration-300"
              onClick={() => setActive("contact")}
            >
              <p className={`${active === "contact" ? "text-gray-100" : ""} `}>Contact</p>
              <span className={`${underlineStyle} ${active === "contact" ? "max-w-full" : ""}`}></span>
            </a>

            <a
              href="./files/Bartosz_Swierzynski.pdf"
              className="group text-gray-400- text-white- text-primary hover:bg-brand/80 hover:text-gray-100 font-semibold transition duration-300 bg-brand px-2 py-1 rounded-md text-md"
              target="_blank"
            >
              <p className={`${active === "resume" ? "text-gray-100" : ""} `}>Resume</p>
              {/* <span className={`${underlineStyle} ${active === "resume" ? "max-w-full" : ""}`}></span> */}
            </a>
          </div>

          {/* HAMBURGER - MENU BUTTON */}
          <div className="block md:hidden">
            <Hamburger toggled={toggleMenu} toggle={() => setToggleMenu(!toggleMenu)} label="Show menu" size={26} />
          </div>
        </div>
      </nav>

      {/* MOBILE - MENU */}
      <div
        id="menu"
        className={`${
          toggleMenu ? "translate-y-1 opacity-100 shadow-navbar" : "translate-y-[-100%] opacity-0"
        } fixed p-3  bg-primary left-0 right-0 top-10 z-10 transition-all duration-500 ease-in-out overflow-y-hidden`}
        // className={`${
        //   toggleMenu ? "translate-y-0 opacity-100" : "translate-y-[-120%] opacity-0"
        // } fixed p-3 rounded-lg bg-primary left-0 right-0 top-10 z-10 transition-all duration-500 ease-in-out overflow-y-hidden shadow-navbar`}
      >
        <div className="flex flex-col items-center justify-center w-full font-bold text-white divide-y divide-solid text-center">
          <a href="#" className="w-full p-2" onClick={() => handleMobileLink("home")}>
            <p
              className={`hover:text-highlight transition-colors duration-300
            ${active === "home" ? "text-highlight" : ""} `}
            >
              Home
            </p>
          </a>
          <a href="#work" className="w-full p-2" onClick={() => handleMobileLink("work")}>
            <p
              className={`hover:text-highlight transition-colors duration-300 
            ${active === "work" ? "text-highlight" : ""} `}
            >
              Work Projects
            </p>
          </a>
          <a href="#personal" className="w-full p-2" onClick={() => handleMobileLink("personal")}>
            <p
              className={`hover:text-highlight transition-colors duration-300 
            ${active === "personal" ? "text-highlight" : ""} `}
            >
              Personal Projects
            </p>
          </a>
          <a href="#about" className="w-full p-2" onClick={() => handleMobileLink("about")}>
            <p
              className={`hover:text-highlight transition-colors duration-300 
              ${active === "about" ? "text-highlight" : ""} `}
            >
              About
            </p>
          </a>
          <a href="#contact" className="transition-all scroll-smooth w-full p-2" onClick={() => handleMobileLink("contact")}>
            <p
              className={`hover:text-highlight transition-colors duration-300 
              ${active === "contact" ? "text-highlight" : ""} `}
            >
              Contact
            </p>
          </a>
          <a
            href="./files/Bartosz_Swierzynski.pdf"
            className="w-full text-center pt-2 hover:text-highlight transition-colors duration-300 "
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
