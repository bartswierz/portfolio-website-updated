import IconLink from "./IconLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-white h-24 w-full pt-2">
      <ul className="flex flex-row gap-2 w-full justify-center items-center text-dark">
        <IconLink linkType="github" />
        <IconLink linkType="linkedin" />
        <IconLink linkType="resume" />
      </ul>
    </footer>
  );
};

export default Footer;
