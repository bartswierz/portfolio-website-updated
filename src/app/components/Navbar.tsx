"use client";
import Link from "next/link";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

const Navbar_ = () => {
  return (
    // <Navbar fluid rounded className="fixed z-[9999] w-full">
    <Navbar fluid rounded className="fixed z-[999] w-full">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary hover:text-primary/80 dark:text-dark dark:hover:text-dark/70">
          &lt;BS /&gt;
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Navbar.Toggle />
      </div>
      {/* NAV LINKS */}
      <Navbar.Collapse>
        <Navbar.Link active href="#work" className="group text-gray-300 transition duration-300">
          <p>Work Projects</p>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5- h-[3px] bg-brand"></span>
        </Navbar.Link>
        <Navbar.Link href="#personal" className="group text-gray-300 transition duration-300">
          <p>Personal Projects</p>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5- h-[3px] bg-brand"></span>
        </Navbar.Link>
        <Navbar.Link href="#about" className="group text-gray-300 transition duration-300">
          <p>About</p>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5- h-[3px] bg-brand"></span>
        </Navbar.Link>
        <Navbar.Link href="#contact" className="group text-gray-300 transition duration-300">
          <p>Contact</p>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5- h-[3px] bg-brand"></span>
        </Navbar.Link>
        <Navbar.Link href="./files/Bartosz_Swierzynski.pdf" className="group text-gray-300 transition duration-300" target="_blank">
          <p>Resume</p>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5- h-[3px] bg-brand"></span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_;
