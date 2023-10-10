import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-white h-16 w-full pt-2">
      <ul className="flex flex-row gap-2 w-full justify-center items-center">
        <Link href={"https://github.com/bartswierz"} target="_blank" className="justify-self-center b">
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
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
