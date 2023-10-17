"use client";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

const Navbar_ = () => {
  const [active, setActive] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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

  // const navbarHidden = "translate-y-[-100%]";

  // const navbarVisible = "translate-y-0";

  return (
    <Navbar
      fluid
      rounded
      className={`fixed z-[999] w-full transition-transform duration-300 ${isNavbarVisible ? `translate-y-0` : `translate-y-[-100%]`}`}
    >
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-dark cursor-default">
        &lt;BS /&gt;
      </span>

      {/* <div className="flex md:order-2 gap-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Navbar.Toggle />
      </div> */}
      {/* NAV LINKS */}
      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          // className={`${active === "home" ? "text-dark" : ""} group text-gray-300 transition duration-300`}
          className={`group text-gray-300 transition duration-300`}
          onClick={() => setActive("home")}
        >
          <p className={`${active === "home" ? "text-gray-200" : ""} `}>Home</p>
          <span className={`${underlineStyle} ${active === "home" ? "max-w-full" : ""}`}></span>
        </Navbar.Link>
        <Navbar.Link href="#work" className="group text-gray-300 transition duration-300" onClick={() => setActive("work")}>
          <p className={`${active === "work" ? "text-gray-200" : ""} `}>Work Projects</p>
          <span className={`${underlineStyle} ${active === "work" ? "max-w-full" : ""}`}></span>
        </Navbar.Link>
        <Navbar.Link href="#personal" className="group text-gray-300 transition duration-300" onClick={() => setActive("personal")}>
          <p className={`${active === "personal" ? "text-gray-200" : ""} `}>Personal Projects</p>
          <span className={`${underlineStyle} ${active === "personal" ? "max-w-full" : ""}`}></span>
        </Navbar.Link>
        <Navbar.Link href="#about" className="group text-gray-300 transition duration-300" onClick={() => setActive("about")}>
          <p className={`${active === "about" ? "text-gray-200" : ""} `}>About</p>
          <span className={`${underlineStyle} ${active === "about" ? "max-w-full" : ""}`}></span>
        </Navbar.Link>
        <Navbar.Link href="#contact" className="group text-gray-300 transition duration-300" onClick={() => setActive("contact")}>
          <p className={`${active === "contact" ? "text-gray-200" : ""} `}>Contact</p>
          <span className={`${underlineStyle} ${active === "contact" ? "max-w-full" : ""}`}></span>
        </Navbar.Link>
        <Navbar.Link href="./files/Bartosz_Swierzynski.pdf" className="group text-gray-300 transition duration-300" target="_blank">
          <p>Resume</p>
          <span className={underlineStyle}></span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_;
