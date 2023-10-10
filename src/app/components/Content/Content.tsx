import { ProjectData } from "../../types";
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
    <div className="p-3  bg-primary border-[3px] border-white rounded-lg overflow-hidden max-w-[600px] min-h-[359px]">
      {/* HEADER - App name and short subheading*/}
      <Heading header={header} subheader={subheader} />

      <Split />

      {/* SKILL LIST */}
      <TechnologyList list={technologyList} />

      <div className="flex flex-col justify-between- b  flex-grow">
        {/* PROJECT DESCRIPTION */}
        <Description text={description} />

        {/* PROJECT BUTTON LINKS - Live Site, Company and/or Github link, and Project Description(modal) */}
        <div className="flex-shrink-0">
          <ContentButtons liveURL={liveURL} githubURL={githubURL} accordionObj={accordionObj} />
        </div>
      </div>
    </div>
  );
};

export default Content;
