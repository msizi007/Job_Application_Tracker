export type Status = "Applied" | "Interviewed" | "Rejected";

export interface Job {
  id?: string;
  role: string;
  description: string;
  company: string;
  location: string;
  status: Status;
  dateApplied: Date | string;
  userId: string;
}
