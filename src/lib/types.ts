export type jobItem = {
  title: string;
  company: string;
  badgeLetters: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
};

export type jobItemExpanded = jobItem & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};
