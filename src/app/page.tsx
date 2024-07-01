import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectList from "./components/Project/ProjectList";
import { PersonalProjectList, WorkProjectList } from "./constants";
import ContactForm from "./components/Contact/ContactForm";
import Project from "./components/Project/Project";
import ProjectHeading from "./components/Project/ProjectHeading";

export default function Home() {
  // const workProject = WorkProjectList[0];

  return (
    <main className="">
      <div className="flex min-h-screen flex-col items-center p-4" id="home">
        <Hero />

        <div id="about" className="min-w-screen min-h-screen flex justify-center items-center flex-col">
          <About />
        </div>

        {/* WORK PROJECTS */}
        <div id="work" className="mt-8 min-h-screen">
          <ProjectHeading text="Work Projects" />
          <ProjectList list={WorkProjectList} />
        </div>

        {/* PERSONAL PROJECTS */}
        <div id="personal" className="mt-8">
          <ProjectHeading text="Personal Projects" />
          <ProjectList list={PersonalProjectList} />
        </div>

        {/* CONTACT */}
        <div id="contact" className="min-h-screen w-screen flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
