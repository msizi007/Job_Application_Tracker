import axios from "axios";
import type { Job } from "../models/Job";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get<Job>(
          `https://msizi007.pythonanywhere.com/jobs/${id}`
        );
        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJob();
  }, [id]);

  return (
    <div className="job-page">
      <Navbar />
      <div className="container">
        {job ? (
          <>
            <div className="job-title">{job.title}</div>
            <div className="job-company">{job.company}</div>
            <div className="job-date-applied">
            <div className="job-status">{job.status}</div>
              Applied on: <span className="date">{job.dateApplied}</span>
            </div>
            <div className="job-location">{job.location}</div>
            <div className="job-role">Role: {job.role}</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
