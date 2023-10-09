"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Accordion__ from "./Accordion";

export default function Modal__() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("default")}>Project Description</Button>
      <Modal show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Project Overview</Modal.Header>
        <Modal.Body>
          <Accordion__ />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
