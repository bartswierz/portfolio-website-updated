import Hero from "./components/Hero";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import { PersonalProjectList, WorkProjectList } from "./constants";
import TechnologiesList from "./components/TechnologiesList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ProjectHeading from "./components/ProjectHeading";

export default function Home() {
  // console.log("work project list: ", WorkProjectList);
  const workProject = WorkProjectList[0];

  console.log("Work Project", workProject);
  return (
    // <main className="flex min-h-screen flex-col items-center p-4">
    // <main className="flex min-h-screen flex-col items-center">
    <main className="">
      <div className="flex min-h-screen flex-col items-center p-4">
        <Hero />

        <div id="about" className="min-w-screen min-h-screen flex justify-center items-center flex-col">
          <About />
          {/* <TechnologiesList /> */}
        </div>

        {/* WORK PROJECTS */}
        <div id="work" className="mt-8"></div>
        <ProjectHeading text="Work Projects" />
        <Project data={workProject} key={workProject.id} />

        {/* PERSONAL PROJECTS */}
        <div id="personal" className="mt-8"></div>
        <ProjectHeading text="Personal Projects" />
        <ProjectList list={PersonalProjectList} />

        {/* CONTACT */}
        <div id="contact" className="min-h-screen w-screen flex justify-center items-center">
          <ContactForm />
        </div>
      </div>

      {/* <div className="w-full relative"> */}
      <Footer />
      {/* </div> */}
    </main>
  );
}
