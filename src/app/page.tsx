import Image from "next/image";
// import { Dropdown } from "flowbite-react";
import DropdownButton from "./components/Dropdown";
import Navbar_ from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* TODO - navbar */}
      {/* <Navbar_ /> */}
      <Hero />
      <About />
      {/* TODO - test flowbite component */}
      {/* <DropdownButton /> */}
      <Carousel />
    </main>
  );
}
