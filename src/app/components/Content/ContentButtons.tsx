// import Button from "../Button";
import Button from "../Buttons/Button";
import Modal from "./Modal";

interface ContentButtonsProps {
  liveURL?: string;
  githubURL: string;
  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned?: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}

const ContentButtons = ({ liveURL, githubURL, accordionObj }: ContentButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {liveURL && <Button text="View Live" buttonType="link" link={liveURL} />}
      <Button text="View Code" buttonType="link" link={githubURL && githubURL} />

      {/* TODO - pass along accordingObj */}
      {/* Open when user clicks Project Description */}
      <Modal accordionObj={accordionObj} />
    </div>
  );
};

export default ContentButtons;
