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
        {/* <Accordion.Content> */}
        <Accordion.Content className="h-full max-h-[50vh] transition-all duration-500">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
          {/* <p className="mb-2 text-gray-500 dark:text-gray-400 text-ellipsis- text-clip- truncate- h-full- max-h-[200px]- overflow-hidden- text">
            {description}
          </p> */}
        </Accordion.Content>
      </Accordion.Panel>

      {/* Why did I build this project? Tab */}
      <Accordion.Panel className="max-h-[50vh] overflow-hidden text-clip">
        <Accordion.Title>Why did I build this project?</Accordion.Title>
        <Accordion.Content className="h-full max-h-[50vh] transition-all- transition-max-h duration-500 text-clip bg-green-500">
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

      {/* Future Features Tab - TODO - optional - work doesnt have*/}
      {/* {
        accordionObj.features && ( */}
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
      {/* ) */}
      {/* // : (
        //   // <div>test</div>
        //   ""
        // ) */}
      {/* } */}
    </Accordion>
  );
}
