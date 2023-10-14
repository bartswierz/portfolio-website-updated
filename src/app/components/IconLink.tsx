import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

interface IconLinkProps {
  linkType: "github" | "linkedin" | "resume" | "contact";
}

const IconLink = ({ linkType = "github" }: IconLinkProps) => {
  let icon: JSX.Element | null = null;
  let text: string | null = null;
  let path: string | null = null;

  switch (linkType) {
    case "github":
      icon = <BsGithub size={26} />;
      text = "GitHub";
      path = "https://github.com/bartswierz";
      break;
    case "linkedin":
      icon = <BsLinkedin size={26} />;
      text = "LinkedIn";
      path = "https://www.linkedin.com/in/bartosz-swierzynski/";
      break;
    case "resume":
      icon = <AiFillFilePdf size={26} />;
      text = "Resume";
      path = "./files/Bartosz_Swierzynski.pdf";
      break;
    case "contact":
      icon = <FiMail size={26} />;
      text = "Contact";
      path = "#contact";
      break;
    default:
      break;
  }

  // While we are waiting for icon, text, and path to be defined, render nothing
  if (!icon || !text || !path) {
    return null;
  }

  // Once we have icon, text, and path, render the link
  if (icon && text && path) {
    // IF CONTACT, USE LINK TO SCROLL DOWN TO OUR CONTACT FORM
    if (linkType === "contact") {
      return (
        <Link href={path}>
          <div className="flex flex-col items-center group">
            <span className="group-hover:text-[#0072fe] transition-all duration-300">{icon}</span>
            <span className="text-sm">{text}</span>
          </div>
        </Link>
      );
    } else {
      // NOT A CONTACT FORM, USE LINK TO OPEN LINK IN A NEW TAB
      return (
        <Link href={path} target="_blank">
          <div className="flex flex-col items-center group">
            <span className="group-hover:text-[#0072fe] transition-all duration-300">{icon}</span>
            <span className="text-sm">{text}</span>
          </div>
        </Link>
      );
    }
  }
};

export default IconLink;
