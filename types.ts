
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface AIResponse {
  strategy: string;
  features: string[];
  timeline: string;
}
