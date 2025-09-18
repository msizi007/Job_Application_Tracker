interface Job {
  id: number;
  title: string;
  company: string;
  role: string;
  location: string;
  status: "Applied" | "Interviewing" | "Offered" | "Rejected";
  dateApplied: string;
}
export type { Job };
