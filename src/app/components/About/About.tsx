"use client";
import hasIntersected from "../../utils/hasIntersected";
import { useRef } from "react";
import TechnologiesList from "./TechnologiesList";

const About = () => {
  const aboutIntersectionRef = useRef<HTMLDivElement>(null);
  const aboutHasIntersected = hasIntersected(aboutIntersectionRef, 0.3);

  return (
    <div
      className={`dark:text-white max-w-[700px] text-center md:text-start mx-4
    ${
      aboutHasIntersected
        ? "animate-fade-up animate-once animate-duration-[600ms] animate-delay-[200ms] animate-ease-in-out"
        : "opacity-0"
    }`}
      ref={aboutIntersectionRef}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center my-2">About Me</h2>
      <p className="leading-relaxed text-[18px] md:text-[24px]">
        I&apos;m a <span className="dark:text-dark">Front-end Developer</span> with nearly{" "}
        <span className="dark:text-dark">two years</span> of honing my skills in front-end technologies. My{" "}
        <span className="dark:text-dark">Bachelor&apos;s Degree in Computer Science</span> has given me a great foundation to solve
        <span className="dark:text-dark"> complex real world problems</span>. I&apos;ve led a{" "}
        <span className="dark:text-dark">5-person front-end team</span> at a{" "}
        <span className="dark:text-dark">non-profit organization</span> to build an application that{" "}
        <span className="dark:text-dark">helps communities</span> across the
        <span className="dark:text-dark"> United States</span> with their <span className="dark:text-dark">Emotional Health</span>. I
        love to build applications that make a difference in <span className="dark:text-dark">someone&apos;s life</span>.
      </p>
      <TechnologiesList />
    </div>
  );
};

export default About;
