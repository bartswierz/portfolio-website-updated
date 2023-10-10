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
      <div className="flex md:order-2 gap-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Navbar.Toggle />
      </div>
      {/* NAV LINKS */}
      <Navbar.Collapse>
        <Navbar.Link active href="#work">
          <p>Work Projects</p>
        </Navbar.Link>
        <Navbar.Link href="#personal">Personal Projects</Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
        <Navbar.Link href="#">Resume</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_;
