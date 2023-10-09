import Button from "../Button";
import Modal from "./Modal";

interface ContentButtonsProps {
  liveURL: string;
  githubURL: string;
}

const ContentButtons = ({ liveURL, githubURL }: ContentButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Button text="View Live" buttonType="link" link={liveURL && liveURL} />
      <Button text="View Code" buttonType="link" link={githubURL && githubURL} />
      {/* Open when user clicks Project Description */}
      <Modal />
    </div>
  );
};

export default ContentButtons;
