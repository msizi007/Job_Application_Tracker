import type { Job } from "./Job";

interface User {
  id: string;
  username: string;
  password: string;
  jobs: Job[] | [];
}
export type { User };
