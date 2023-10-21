export type AccordionObjType = {
  title: string;
  contentType: "paragraph" | "list";
  content: string | string[];
};

export interface ProjectData {
  id: number;
  header: string;
  subheader: string;
  technologyList: string[];
  description: string;
  liveURL?: string; //Polaris doesnt have live url
  githubURL: string;
  imageList?: string[]; //project images
  image?: string; //project images

  // accordionObj: {
  //   description: string;
  //   reason: string;
  //   difficulties: string;
  //   learned?: string;
  //   contributions?: string[]; // for work projects
  //   features?: string[]; // for personal projects
  // };

  // accordionObj: {
  //   title: string;
  //   contentType: "paragraph" | "list";
  //   content: string | string[];
  // }[];
  accordionList: AccordionObjType[];
}
