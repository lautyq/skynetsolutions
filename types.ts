
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Ticket {
  id: string;
  subject: string;
  status: 'Open' | 'Pending' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
