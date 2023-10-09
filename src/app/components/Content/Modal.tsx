"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Accordion__ from "./Accordion";

interface ModalProps {
  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}

export default function Modal__({ accordionObj }: ModalProps) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  console.log("ACCORDION OBJ: ", accordionObj);

  return (
    <>
      {/* BUTTON TO OPEN MODAL */}
      <Button
        color="undefined"
        onClick={() => props.setOpenModal("default")}
        className="bg-red-500- bg-transparent border-2 border-white font-bold hover:bg-blue-700"
      >
        Project Description
      </Button>

      {/* MODAL CONTENT - DISPLAYED IN CENTERED VERTICALLY & HORIZONTALLY */}
      <Modal className="bg-gray-900/70" show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
        <div className="dark:bg-primary">
          <Modal.Header>Project Overview</Modal.Header>
          <Modal.Body>
            <Accordion__ accordionObj={accordionObj} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              color=""
              className="border-[3px] border-white text-white font-semibold hover:bg-technology"
              onClick={() => props.setOpenModal(undefined)}
            >
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
