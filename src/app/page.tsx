import Image from "next/image";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Hero />
      <About />
      <Carousel />
    </main>
  );
}
