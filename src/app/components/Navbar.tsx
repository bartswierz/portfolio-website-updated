"use client";
import Link from "next/link";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

const Navbar_ = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary hover:text-primary/80 dark:text-dark dark:hover:text-dark/70">
          &lt;BS /&gt;
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <button>Get started</button> */}
        <Navbar.Toggle />
      </div>
      {/* NAV LINKS */}
      <Navbar.Collapse>
        {/* <div className="flex items-center justify-center"> */}
        {/* <div className="text-center text-middle vertical-align align-vertical"> */}
        <Navbar.Link active href="#work">
          <p>Work Projects</p>
        </Navbar.Link>
        <Navbar.Link href="#personal">Personal Projects</Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
        <Navbar.Link href="#">Resume</Navbar.Link>
        <Navbar.Link href="#">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </Navbar.Link>
        {/* </div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_;
