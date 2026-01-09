import axios from "axios";
import type { Job } from "../models/Job";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const BASE_URL = "https://json-server1-uini.onrender.com/jobs";

export default function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get<Job>(`${BASE_URL}/${id}`);
        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJob();
  }, [id]);

  return (
    <div className="job-page">
      <Navbar loggedIn={true} />
      <div className="container mt-5">
        {job ? (
          <>
            <div className="display-4">{job.role}</div>
            <p>
              <span className="h5">{job.company}</span>
              <span className="text-muted">, {job.location}</span>
            </p>
            <div className="text-muted">
              {job.status == "Applied" && (
                <div className="badge badge-info p-2 my-1">{job.status}</div>
              )}
              {job.status == "Interviewed" && (
                <div className="badge badge-warning p-2 my-1">{job.status}</div>
              )}
              {job.status == "Rejected" && (
                <div className="badge badge-danger p-2 my-1">{job.status}</div>
              )}
              <p>
                Applied on:{" "}
                <span className="date">{job.dateApplied as string}</span>
              </p>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
