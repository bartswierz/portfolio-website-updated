import { ProjectData } from "../../types";
import Modal from "./Modal";
import Button from "../Button";
import Description from "./Description";
import TechnologyList from "./TechnologyList";
import ContentButtons from "./ContentButtons";
import Heading from "./Heading";
import Split from "./Split";

interface ContentProps {
  data: ProjectData;
}
//Contains project description, links to github, and live site
const Content = ({ data }: ContentProps) => {
  const { header, subheader, technologyList, description, liveURL, githubURL, accordionObj } = data;

  return (
    <div className="p-3  bg-primary">
      {/* HEADER - App name and short subheading*/}
      <Heading header={header} subheader={subheader} />

      <Split />

      {/* SKILL LIST */}
      <TechnologyList list={technologyList} />

      {/* PROJECT DESCRIPTION */}
      <Description text={description} />

      {/* PROJECT BUTTON LINKS - Live Site, Company and/or Github link, and Project Description(modal) */}
      <ContentButtons liveURL={liveURL} githubURL={githubURL} accordionObj={accordionObj} />
    </div>
  );
};

export default Content;
