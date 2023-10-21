import { ProjectData } from "../../types";
import Description from "./Description";
import TechnologiesUsed from "./TechnologiesUsed";
import ContentButtons from "./ContentButtons";
import Heading from "./Heading";
import Split from "./Split";

interface ContentProps {
  data: ProjectData;
}
//Contains project description, links to github, and live site
const Content = ({ data }: ContentProps) => {
  // const { header, subheader, technologyList, description, liveURL, githubURL, accordionObj } = data;
  const { header, subheader, technologyList, description, liveURL, githubURL, accordionList } = data;
  // console.log("accordionlist: ", accordionList);
  return (
    <div className="p-3 bg-primary border-[3px] border-white rounded-lg overflow-hidden max-w-[600px]">
      {/* HEADER - App name and short subheading*/}
      <Heading header={header} subheader={subheader} />

      <Split />

      {/* SKILL LIST */}
      <TechnologiesUsed list={technologyList} />

      <div className="flex flex-col flex-grow">
        {/* PROJECT DESCRIPTION */}
        <Description text={description} />

        {/* PROJECT BUTTON LINKS - Live Site, Company and/or Github link, and Project Description(modal) */}
      </div>
      <div className="flex-shrink-0 mb-2">
        <ContentButtons liveURL={liveURL && liveURL} githubURL={githubURL} accordionList={accordionList} />
      </div>
    </div>
  );
};

export default Content;
