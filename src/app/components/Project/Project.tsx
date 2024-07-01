import Content from "./Content/Content";
import Modal from "./Content/Modal";
import { ProjectData } from "../../types/index";
import LaptopMockup from "./LaptopMockup";

interface ProjectProps {
  data: ProjectData;
}

//TODO - Displays content for an individual work or personal project
const Project = ({ data }: ProjectProps) => {
  const { imageList } = data;

  return (
    <div className="text-white max-w-[600px]">
      {imageList && <LaptopMockup imageList={imageList} />}
      <Content data={data} />
    </div>
  );
};

export default Project;
