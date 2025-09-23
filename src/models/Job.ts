interface Job {
  id: string;
  title: string;
  company: string;
  role: string;
  location: string;
  status: "Applied" | "Interviewing" | "Offered" | "Rejected";
  dateApplied: string;
  userId: string;
}
export type { Job };
