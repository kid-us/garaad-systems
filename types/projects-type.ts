export interface ProjectItem {
  id: string;
  title: string;
  liveUrl: string;
  description?: string;
  imgSrc: string;
  featured?: boolean;
  tags?: string[];
}

export type ProjectsList = ProjectItem[];
