import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white h-16 w-full pt-2">
      <ul className="flex flex-row gap-2 w-full justify-center items-center">
        <Link href={"https://github.com/bartswierz"} target="_blank">
          Github
        </Link>
        <Link href={"https://www.linkedin.com/in/bartosz-swierzynski/"} target="_blank">
          LinkedIn
        </Link>
        <Link href={"#"} target="_blank">
          Resume
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
