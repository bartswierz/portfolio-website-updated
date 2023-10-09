export interface ProjectData {
  id: number;
  header: string;
  subheader: string;
  technologyList: string[];
  description: string;
  liveURL: string;
  githubURL: string;

  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned?: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}
