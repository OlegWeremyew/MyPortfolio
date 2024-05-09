export type ExperienceItemType = {
  id: string;
  company: string;
  url: string;
  type: 'full-time' | 'part-time';
  position: string;
  responsibility: string[];
  stack: string[];
  timeStart: string;
  timeEnd: string;
};
