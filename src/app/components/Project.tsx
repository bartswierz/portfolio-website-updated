import Content from "./Content";
import CarouselDefault from "./Carousel";
import Modal from "./Modal";

//TODO - pass in an object that will give the project data to the project component
//contains all information for the project section
const Project = () => {
  return (
    <div className="b">
      Project container
      <CarouselDefault />
      <Content />
      <Modal />
    </div>
  );
};

export default Project;
