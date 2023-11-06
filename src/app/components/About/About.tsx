"use client";
import hasIntersected from "../../utils/hasIntersected";
import { useRef } from "react";
import TechnologiesList from "../../../../TechnologiesList";
const About = () => {
  const aboutIntersectionRef = useRef<HTMLDivElement>(null);
  const aboutHasIntersected = hasIntersected(aboutIntersectionRef, 0.3);

  return (
    // <div className="dark:text-white max-w-[700px] text-center md:text-start mx-4" ref={aboutHasIntersected}>
    <div
      className={`dark:text-white max-w-[700px] text-center md:text-start mx-4
    ${aboutHasIntersected ? "animate-fade-up animate-once animate-duration-[600ms] animate-delay-[200ms] animate-ease-in-out" : ""}`}
      ref={aboutIntersectionRef}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center my-2">About Me</h2>
      <p className="leading-relaxed text-[18px] md:text-[24px]">
        I&apos;m a <span className="dark:text-dark">Front-end Developer</span> with
        <span className="dark:text-dark"> full stack capabilities</span> currently working at a
        <span className="dark:text-dark"> public health non-profit organization</span>. I&apos;m a recent
        <span className="dark:text-dark"> DePaul University graduate</span> with a{" "}
        <span className="dark:text-dark">Bachelor&apos;s Degree</span> in
        <span className="dark:text-dark"> Computer Science</span> and a <span className="dark:text-dark">curious developer</span> who
        genuinely loves to learn <span className="dark:text-dark">cutting-edge technologies</span> that elevate my skills as a
        developer.
      </p>

      <TechnologiesList />
    </div>
  );
};

export default About;
