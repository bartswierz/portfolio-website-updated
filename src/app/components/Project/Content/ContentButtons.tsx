// import Button from "../Button";
import { AccordionObjType, linkObjType } from "@/app/types";
import Button from "../../Buttons/Button";
import Modal from "./Modal";

interface ContentButtonsProps {
  liveURLObj: linkObjType | undefined;
  siteURLObj: linkObjType | undefined;
  accordionList: AccordionObjType[];
}

const ContentButtons = ({ liveURLObj, siteURLObj, accordionList }: ContentButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {liveURLObj && <Button text={liveURLObj.buttonText} buttonType="link" link={liveURLObj.url} />}
      {siteURLObj && <Button text={siteURLObj.buttonText} buttonType="link" link={siteURLObj.url} />}

      {/* Open when user clicks Project Description */}
      <Modal accordionList={accordionList} />
    </div>
  );
};

export default ContentButtons;
