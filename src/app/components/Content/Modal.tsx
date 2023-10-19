"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Accordion__ from "./Accordion";

interface ModalProps {
  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned?: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}

export default function Modal__({ accordionObj }: ModalProps) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      {/* BUTTON TO OPEN MODAL */}
      <button
        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-bold rounded-lg group  text-sm"
        onClick={() => props.setOpenModal("default")}
      >
        {/* GRAY SHAPE DESIGN */}
        <span className="w-[204px] h-[204px] rotate-45 translate-x-[40px] -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>

        {/* LEFT TO RIGHT COLOR TRANSITION */}
        <span className="absolute top-[-2px] left-0 w-52 h-52 -mt-1 transition-all duration-[600ms] ease-in-out rotate-45 -translate-x-56x -translate-x-[246px] -translate-y-24 bg-white- bg-brand opacity-100 group-hover:-translate-x-8x group-hover:-translate-x-2"></span>

        {/* TEXT COLOR CHANGE ON HOVER */}
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
          Project Description
        </span>
        <span className="absolute inset-0 border-2 border-white hover:border-primary rounded-lg"></span>
      </button>

      {/* MODAL CONTENT - DISPLAYED IN CENTERED VERTICALLY & HORIZONTALLY */}
      <Modal className="bg-gray-900/70 z-[9999]" show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
        <div className="dark:bg-primary overflow-auto">
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
