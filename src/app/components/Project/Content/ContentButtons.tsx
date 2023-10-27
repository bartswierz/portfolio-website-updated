// import Button from "../Button";
import { AccordionObjType } from "@/app/types";
import Button from "../../Buttons/Button";
import Modal from "./Modal";

// interface ContentButtonsProps {
//   liveURL?: string;
//   githubURL: string;
//   accordionObj: {
//     description: string;
//     reason: string;
//     difficulties: string;
//     learned?: string;
//     contributions?: string[]; // for work projects
//     features?: string[]; // for personal projects
//   };
// }
interface ContentButtonsProps {
  liveURL?: string;
  githubURL: string;
  accordionList: AccordionObjType[];
}

// const ContentButtons = ({ liveURL, githubURL, accordionObj }: ContentButtonsProps) => {
const ContentButtons = ({ liveURL, githubURL, accordionList }: ContentButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {liveURL && <Button text="View Live" buttonType="link" link={liveURL} />}
      <Button text={liveURL?.includes("civilience") ? "View Company" : "View Code"} buttonType="link" link={githubURL && githubURL} />

      {/* Open when user clicks Project Description */}
      <Modal accordionList={accordionList} />
    </div>
  );
};

export default ContentButtons;
