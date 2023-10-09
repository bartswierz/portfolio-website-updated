import Image from "next/image";
import Hero from "./components/Hero";
import CarouselDefault from "./components/Carousel";
import About from "./components/About";
import Modal from "./components/Modal";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Hero />
      <About />
      {/* TODO - project component containing images, content component, and modal for each of the projects */}
      {/* <div className="bg-green-500"> */}
      {/* Next Level Games */}
      <Project />
      {/* <CarouselDefault /> */}
      {/* <Content /> */}
      {/* <Modal /> */}
      {/* </div> */}
    </main>
  );
}
