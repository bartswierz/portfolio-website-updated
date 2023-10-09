import Image from "next/image";
import Hero from "./components/Hero";
import CarouselDefault from "./components/Carousel";
import About from "./components/About";
import Modal from "./components/Content/Modal";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";
import { PersonalProjectList, WorkProjectList } from "./constants";
import ProjectHeading from "./components/ProjectHeading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Hero />
      <About />

      <ProjectHeading text="Work Projects" />
      <ProjectList list={WorkProjectList} />

      <ProjectHeading text="Personal Projects" />
      <ProjectList list={PersonalProjectList} />
    </main>
  );
}
