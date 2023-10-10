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
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-w-[1400px] gap-12 text-white justify-items-center b">
      {list.map((project, index) => (
        <div key={project.id} className={`relative ${index === list.length - 1 ? "xl:col-span-2 xl:justify-self-center" : ""}`}>
          <Project data={project} key={project.id} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
