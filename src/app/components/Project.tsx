import Content from "./Content/Content";
import CarouselDefault from "./Carousel";
import Modal from "./Content/Modal";
import { ProjectData } from "../types/index";
import LaptopMockup from "./LaptopMockup";
interface ProjectProps {
  data: ProjectData;
}

//TODO - Displays content for an individual work or personal project
const Project = ({ data }: ProjectProps) => {
  // console.log("data: ", data);
  const { image } = data;
  console.log("image: ", image);
  return (
    // <div className="text-white border-[3px] border-white rounded-lg overflow-hidden">
    <div className="text-white ">
      {/* TODO - TEMPORARY - Pass in image list after adding images to our constants index file */}
      {/* <LaptopMockup imageList={imageList} /> */}
      {data.image && <LaptopMockup image={data.image} />}
      {/* Container with all text about the project */}
      <Content data={data} />
    </div>
  );
};

export default Project;
