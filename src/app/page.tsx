import Hero from "./components/Hero";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import { PersonalProjectList } from "./constants";
import TechnologiesList from "./components/TechnologiesList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
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

        <div id="work"></div>
        {/* <ProjectHeading text="Work Projects" />
      <ProjectList list={WorkProjectList} /> */}

        <div id="personal"></div>
        {/* <ProjectHeading text="Personal Projects" /> */}
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
