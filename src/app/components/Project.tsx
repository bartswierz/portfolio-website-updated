import Content from "./Content/Content";
import CarouselDefault from "./Carousel";
import Modal from "./Content/Modal";
import { ProjectData } from "../types/index";

interface ProjectProps {
  data: ProjectData;
}

//TODO - Displays content for an individual work or personal project
const Project = ({ data }: ProjectProps) => {
  // TODO - destructure here and then pass in to our components as needed

  // console.clear();
  // console.log("data*: ", data);
  return (
    <div className="text-white">
      {/* TODO - TEMPORARY - may replace with desktop/phone layout */}
      {/* <CarouselDefault /> */}

      {/* Container with all text about the project */}
      <Content data={data} />
    </div>
  );
};

export default Project;
