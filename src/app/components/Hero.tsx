import Button from "./Button";
import IconLink from "./IconLink";

// Reference: https://flowbite.com/docs/components/jumbotron/
const Hero = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="b py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-dark">
          Bartosz Swierzynski
          {/* Who you gonna call? GHOST BOO-STERS */}
        </h1>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900- md:text-5xl lg:text-5xl dark:text-dark">
          Front-end Developer
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          <span className="dark:text-dark">Coding</span> with <span className="dark:text-dark">Curiosity</span>,{" "}
          <span className="dark:text-dark">Designing</span> with a <span className="dark:text-dark">Vision</span>
        </p>

        {/* LINKS */}
        <ul className="text-dark flex flex-row justify-center items-center gap-2 mb-2">
          <IconLink linkType="linkedin" />
          <IconLink linkType="github" />
          <IconLink linkType="contact" />
        </ul>

        {/* BUTTONS - PROJECT/ABOUT */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <div id="work"></div>
          <Button text="Projects" buttonType="primary" link="#" />

          <div id="about"></div>
          <Button text="About" buttonType="secondary" link="#" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
