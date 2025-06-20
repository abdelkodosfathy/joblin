export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface JobApplication {
  id: string;
  jobId: string;
  seekerId: string;
  cvUrl: string;
  coverLetter?: string;
  status: ApplicationStatus;
  appliedAt: string;
}
