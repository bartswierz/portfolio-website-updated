import Image from "next/image";
// import { Dropdown } from "flowbite-react";
import DropdownButton from "./components/dropdown";
import Navbar_ from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* TODO - navbar */}
      {/* <Navbar_ /> */}
      <Hero />
      {/* TODO - test flowbite component */}
      {/* <DropdownButton /> */}
    </main>
  );
}
