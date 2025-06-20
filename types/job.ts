export interface Job {
  id: string;
  title: string;
  description: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  location: string;
  salary: number;
  employerId: string;       // العلاقة بصاحب العمل
  createdAt: string;
  updatedAt?: string;
}
