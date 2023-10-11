import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-white h-24 w-full pt-2">
      <ul className="flex flex-row gap-2 w-full justify-center items-center">
        {/* <Link href={"https://github.com/bartswierz"} target="_blank" className="justify-self-center b">
          <BsGithub size={26} />
          Github
        </Link>
        <Link href={"https://www.linkedin.com/in/bartosz-swierzynski/"} target="_blank">
          <BsLinkedin size={26} />
          LinkedIn
        </Link>
        <Link href={"#"} target="_blank">
          <AiFillFilePdf size={26} />
          Resume
        </Link> */}
        <Link href={"https://github.com/bartswierz"} target="_blank">
          <div className="flex justify-center items-center">
            <BsGithub size={26} />
          </div>
          <span className="text-sm">Github</span>
        </Link>
        <Link href={"https://www.linkedin.com/in/bartosz-swierzynski/"} target="_blank">
          <div className="flex justify-center items-center">
            <BsLinkedin size={26} />
          </div>
          <span className="text-sm">LinkedIn</span>
        </Link>
        <Link href={"./files/Bartosz_Swierzynski.pdf"} target="_blank">
          <div className="flex justify-center items-center">
            <AiFillFilePdf size={26} />
          </div>
          <span className="text-sm">Resume</span>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
