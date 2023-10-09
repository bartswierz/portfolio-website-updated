interface ProjectHeadingProps {
  text: string;
}

const ProjectHeading = ({ text }: ProjectHeadingProps) => {
  return <h2 className="dark:text-white text-2xl font-semibold my-4 text-wrap text-center">{text}</h2>;
};

export default ProjectHeading;
