import Button from "./Button";
import IconLink from "./IconLink";
import DropdownArrow from "./ArrowScroll";
// Reference: https://flowbite.com/docs/components/jumbotron/
const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white/90 animate-jump-in animate-once animate-duration-[800ms] animate-delay-500">
          Hi, I&apos;m <span className="text-highlight">Bart</span> | <span className="text-highlight">Front-end Developer</span>
        </h1>
        <h1 className="mb-4 text-xl font-normal text-gray-500 md:text-3xl sm:px-16 lg:px-48 dark:text-white/90 animate-jump-in animate-once animate-duration-[800ms] animate-delay-[600ms]">
          Turning <span className="text-highlight">ideas</span> into reality by building
        </h1>
        <h1 className="mb-4 text-xl font-normal text-gray-500 md:text-2xl sm:px-16 lg:px-48 dark:text-white/90 animate-jump-in animate-once animate-duration-[800ms] animate-delay-[700ms]">
          Let&apos;s build something
        </h1>

        {/* LINKS */}
        <ul className="text-dark flex flex-row justify-center items-center gap-2 mb-2">
          <IconLink linkType="linkedin" animationDelay={"1000ms"} />
          <IconLink linkType="github" animationDelay={"3000ms"} />
          <IconLink linkType="contact" animationDelay={"5000ms"} />
        </ul>

        <DropdownArrow />
      </div>
    </section>
  );
};

export default Hero;
