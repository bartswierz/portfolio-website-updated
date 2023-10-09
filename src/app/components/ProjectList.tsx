import { PersonalProjectList } from "../constants";
import { ProjectData } from "../types";
import Project from "./Project";

interface ProjectListProps {
  list: ProjectData[];
}

// Renders out our list of work or personal projects
const ProjectList = ({ list }: ProjectListProps) => {
  // console.log("list", list);
  return (
    <div className="text-white">
      {list.map((project) => (
        <Project data={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
