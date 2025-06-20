export type UserRole = 'seeker' | 'employer';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // اختياري عند التعامل مع الواجهة فقط
  role: UserRole;
  createdAt: string;
}
