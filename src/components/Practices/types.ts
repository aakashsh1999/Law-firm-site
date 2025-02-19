export interface Service {
  title: string;
  link: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  additionalInfo?: string;
  services: Service[];
  viewAllLink?: string;
}
