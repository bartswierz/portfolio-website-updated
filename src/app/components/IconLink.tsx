import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

interface IconLinkProps {
  linkType: string;
}

const IconLink = ({ linkType = "github" }: IconLinkProps) => {
  let icon: string;
  let text: string;
  let path: string;

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
      icon = null;
      text = "Unknown";
  }

  // IF CONTACT, USER LINK TO SCROLL DOWN TO OUR CONTACT FORM
  if (linkType === "contact")
    return (
      <Link href={path}>
        <div className="flex flex-col items-center">
          {icon}
          <span className="text-sm">{text}</span>
        </div>
      </Link>
    );

  // NOT A CONTACT FORM, USE LINK TO OPEN LINK IN A NEW TAB
  return (
    <Link href={path} target="_blank">
      <div className="flex flex-col items-center">
        {icon}
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
};

export default IconLink;
