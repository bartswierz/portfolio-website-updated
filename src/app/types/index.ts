export type AccordionObjType = {
  title: string;
  contentType: "paragraph" | "list";
  content: string | string[];
};

export type linkObjType = {
  buttonText: string;
  url: string;
};

export interface ProjectData {
  id: number;
  header: string;
  subheader: string;
  technologyList: string[];
  description: string;
  liveLinkObj?: linkObjType;
  siteLinkObj?: linkObjType;
  imageList?: string[];
  image?: string;
  projectType: "work" | "personal";
  accordionList: AccordionObjType[];
}
