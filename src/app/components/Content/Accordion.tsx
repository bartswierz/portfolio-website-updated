"use client";

import { Accordion } from "flowbite-react";

export default function Accordion__() {
  return (
    <Accordion>
      {/* Project Description Tab*/}
      <Accordion.Panel>
        <Accordion.Title>Project Description</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>Project Description Placeholder text</p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Why did I build this project? Tab */}
      <Accordion.Panel>
        <Accordion.Title>Why did I build this project?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>Build Difficulties? Placeholder text</p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Build Difficulties? Tab */}
      <Accordion.Panel>
        <Accordion.Title>Build Difficulties?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>Build Difficulties? Placeholder text</p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Future Features Tab */}
      <Accordion.Panel>
        <Accordion.Title>Future Features</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>Future Features Placeholder text</p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
