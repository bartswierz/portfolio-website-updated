export interface ProjectData {
  title: string;
  subtitle: string;
  technologyList: string[];
  description: string;
  liveURL: {
    url: string;
    // text: string;
  };
  githubURL: {
    url: string;
    // text: string;
  };
  accordionObj: {
    description: string;
    reason: string;
    difficulties: string;
    learned: string;
    contributions?: string[]; // for work projects
    features?: string[]; // for personal projects
  };
}
