import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectList from "./components/Project/ProjectList";
import { PersonalProjectList, WorkProjectList } from "./constants";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import ProjectHeading from "./components/Project/ProjectHeading";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  // console.log("work project list: ", WorkProjectList);
  const workProject = WorkProjectList[0];
  const success = true;
  // console.log("Work Project", workProject);
  return (
    // <main className="flex min-h-screen flex-col items-center p-4">
    // <main className="flex min-h-screen flex-col items-center">
    <main className="">
      <div className="flex min-h-screen flex-col items-center p-4" id="home">
        <Hero />

        <div id="about" className="min-w-screen min-h-screen flex justify-center items-center flex-col">
          <About />
          {/* <TechnologiesList /> */}
        </div>

        {/* WORK PROJECTS */}
        <div id="work" className="mt-8 min-h-screen">
          <ProjectHeading text="Work Projects" />
          <Project data={workProject} key={workProject.id} />
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

      {/* <div className="w-full relative"> */}
      {/* <Footer /> */}
      {/* </div> */}
      {/* <button
        className="bg-blue-500 py-2 px-4"
        onClick={() =>
          toast.success("🦄 Wow so easy!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      >
        Send
      </button> */}
      {/* <div className="w-min- b flex flex-row relative w-max"> */}
      {/* {success && ( */}
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {/* <ToastContainer /> */}
      {/* )} */}
      {/* </div> */}
    </main>
  );
}
