import axios from "axios";
import type { Job } from "../models/Job";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get<Job>(
          `http://localhost:3000/jobs/${id}`
        );
        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJob();
  }, [id]);

  return (
    <div className="job-container">
      {job ? (
        <>
          <div className="job-title">{job.title}</div>
          <div className="job-company">{job.company}</div>
          <div className="job-location">{job.location}</div>
          <div className="job-role">{job.role}</div>
          <div className="job-status">{job.status}</div>
          <div className="job-date-applied">{job.dateApplied}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
