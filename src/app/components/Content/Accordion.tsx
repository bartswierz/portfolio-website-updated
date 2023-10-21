"use client";

import { Accordion } from "flowbite-react";
import { AccordionObjType } from "@/app/types";
import { Key } from "react";

interface AccordionProps {
  accordionList: AccordionObjType[];
}

export default function Accordion__({ accordionList }: AccordionProps) {
  return (
    <Accordion>
      {accordionList.map((accordionObj, idx) => {
        const { title, contentType, content } = accordionObj;

        return (
          <Accordion.Panel key={idx}>
            <Accordion.Title>{title}</Accordion.Title>
            <Accordion.Content>
              {Array.isArray(content) ? ( // contentType === 'list'
                <ul className="mb-2 text-gray-500 dark:text-gray-400 ">
                  {content.map((feature: string, idx: Key) => (
                    <li key={idx} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                // contentType === 'paragraph'
                <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
              )}
            </Accordion.Content>
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
}
