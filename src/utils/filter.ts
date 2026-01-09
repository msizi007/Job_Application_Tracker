import type { Job } from "../models/Job";
import type { FilterBy, Order } from "../pages/Home";

type JobKey = "role" | "company" | "location" | "dateApplied";

export function sortJobs(
  jobs: Job[],
  filterBy: FilterBy,
  orderBy: Order
): Job[] {
  const sortedJobs = [...jobs];

  const keyMap: Record<FilterBy, JobKey> = {
    Role: "role",
    Company: "company",
    Location: "location",
    "Date Applied": "dateApplied",
  };
  const key = keyMap[filterBy];

  sortedJobs.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    let comparison = 0;

    // Handle string comparison (Role, Company, Location)
    if (typeof aValue === "string" && typeof bValue === "string") {
      comparison = aValue.localeCompare(bValue);
    }
    // Handle date comparison (Date Applied)
    else if (key === "dateApplied") {
      // Convert dates to timestamps for reliable comparison
      const aTime = new Date(aValue).getTime();
      const bTime = new Date(bValue).getTime();
      comparison = aTime - bTime;
    }
    // Fallback for other comparisons (e.g., if sorting by a numeric field)
    else if (aValue > bValue) {
      comparison = 1;
    } else if (aValue < bValue) {
      comparison = -1;
    }

    // Apply the order (Descending reverses the comparison result)
    return orderBy === "Descending" ? comparison * -1 : comparison;
  });

  return sortedJobs;
}
