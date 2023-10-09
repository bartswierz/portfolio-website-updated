"use client";

import { Accordion } from "flowbite-react";

interface AccordionProps {
  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned?: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}

export default function Accordion__({ accordionObj }: AccordionProps) {
  const { description, reason, difficulties, features } = accordionObj;

  return (
    <Accordion>
      {/* Project Description Tab*/}
      <Accordion.Panel>
        <Accordion.Title>Project Description</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Why did I build this project? Tab */}
      <Accordion.Panel>
        <Accordion.Title>Why did I build this project?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{reason}</p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Build Difficulties? Tab */}
      <Accordion.Panel>
        <Accordion.Title>Build Difficulties?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{difficulties}</p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Future Features Tab */}
      <Accordion.Panel>
        <Accordion.Title>Future Features</Accordion.Title>
        <Accordion.Content>
          <ul className="mb-2 text-gray-500 dark:text-gray-400 ">
            {features &&
              features.map((feature, idx) => (
                <li key={idx} className="list-disc list-inside">
                  {feature}
                </li>
              ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
