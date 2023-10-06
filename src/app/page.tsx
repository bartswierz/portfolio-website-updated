import Image from "next/image";
import Hero from "./components/Hero";
import CarouselDefault from "./components/Carousel";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Hero />
      <About />
      {/* TODO - pass images here */}
      {/* <div className="bg-green-500"> */}
      <CarouselDefault />
      {/* </div> */}
    </main>
  );
}
