import Link from "next/link";
import IconLink from "../IconLink";

const Footer = () => {
  return (
    <footer className="bg-primary  text-white w-full- w-screen min-h-max h-max py-4 opacity-[75%]">
      <ul className="flex flex-row gap-2 w-full justify-center items-center text-dark">
        <IconLink linkType="github" />
        <IconLink linkType="linkedin" />
        <IconLink linkType="resume" />
      </ul>
      <ul className="flex gap-2 justify-center py-2 list-none md:list-disc list-inside flex-wrap mx-2 flex-col md:flex-row text-center transition-all">
        <li className="pr-2 first:list-none">
          <a href="#" className="hover:text-highlight duration-300 ">
            Home
          </a>
        </li>
        {/* <span>&#x2022;</span> */}
        <li className="pr-2">
          <a href="#work" className="hover:text-highlight duration-300">
            Work Projects
          </a>
        </li>
        {/* <span>&#x2022;</span> */}
        <li className="pr-2">
          <a href="#personal" className="hover:text-highlight duration-300">
            Personal Projects
          </a>
        </li>
        {/* <span>&#x2022;</span> */}
        <li className="pr-2">
          <a href="#about" className="hover:text-highlight duration-300">
            About
          </a>
        </li>
        {/* <span>&#x2022;</span> */}
        <li className="pr-2">
          <a href="#contact" className="hover:text-highlight duration-300">
            Contact
          </a>
        </li>
      </ul>
      <p className="text-center">BartoszSwierzynski.com © 2023 </p>
    </footer>
  );
};

export default Footer;
