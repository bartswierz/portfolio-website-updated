import { ProjectData } from "../../types";
import Modal from "./Modal";
import Button from "../Button";
import Description from "./Description";
import TechnologyList from "./TechnologyList";
import ContentButtons from "./ContentButtons";

interface ContentProps {
  data: ProjectData;
}
//Contains project description, links to github, and live site
const Content = ({ data }: ContentProps) => {
  const { header, subheader, technologyList, description, liveURL, githubURL } = data;

  return (
    <div className="p-2 bg-primary">
      {/* HEADER - App name and short subheading*/}
      <div className="text-center">
        <div className="text-2xl font-bold">{header}</div>
        <div className="text-sm text-gray-300">{subheader}</div>
      </div>

      <div className="h-[1px] w-[98%] bg-gray-200 mx-auto my-2"></div>

      {/* SKILL LIST */}
      <TechnologyList list={technologyList} />

      {/* PROJECT DESCRIPTION */}
      <Description text={description} />

      {/* PROJECT BUTTON LINKS - Live Site, Company and/or Github link, and Project Description(modal) */}
      <ContentButtons liveURL={liveURL} githubURL={githubURL} />
    </div>
  );
};

export default Content;
