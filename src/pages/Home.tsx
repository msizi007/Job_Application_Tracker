import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import { Color } from "../context/_css";
import Modal from "../components/Modal";
import InputField from "../components/InputField/InputField";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Job } from "../models/Job";
import type { User } from "../models/User";
import { getUser } from "../utils/auth";

interface HomeProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home(props: HomeProps) {
  function onAddJob() {
    props.setModalVisible(true);
  }

  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState<Job[] | []>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/jobs`).then((res) => {
      if (getUser() !== props.user) {
        props.setUser(getUser());
      }
      if (res.data != jobs) {
        setJobs(res.data);
        setFilteredJobs(
          res.data.filter((job: Job) => {
            return job.userId === props.user!.id;
          })
        );
      }
    });
  }, [jobs, props.user, props]);

  function addJob() {
    console.log(props.user);
    props.setModalVisible(false);

    const job = {
      title: jobTitle,
      company: company,
      location: location,
      role: role,
      status: "Applied",
      dateApplied: new Date().toISOString().split("T")[0],
      userId: props.user!.id,
    };

    if (jobTitle === "" || company === "" || role === "" || location === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    axios
      .post(`http://localhost:3000/jobs`, job)
      .then(() => {
        alert("Job added sucessfully.");
      })
      .catch((error) => {
        alert("Cannot add job." + error);
      });
  }

  return (
    <div className="home-page">
      <Navbar />
      <div className="body">
        <div className="row">
          <h2>All Jobs</h2>
          <Button
            color="white"
            bg={Color.Mantis}
            text="Add Job"
            onclick={onAddJob}
          />
        </div>
        <hr />
        <Table
          head={["Title", "Company", "Location", "Actions"]}
          data={filteredJobs}
        />
      </div>
      {props.modalVisible && (
        <Modal
          title="Add New Job"
          content={
            <div>
              <InputField
                for="jobTitle"
                type="text"
                placeholder="Job Title"
                field={jobTitle}
                setField={setJobTitle}
              />
              <InputField
                type="text"
                placeholder="Company"
                field={company}
                setField={setCompany}
              />
              <InputField
                type="text"
                placeholder="Location"
                field={location}
                setField={setLocation}
              />
              <InputField
                type="text"
                placeholder="Role"
                field={role}
                setField={setRole}
              />
              <Button
                color="white"
                bg={Color.Mantis}
                text="Submit"
                onclick={(e) => {
                  e!.preventDefault();
                  addJob();
                }}
              />
            </div>
          }
          onClose={() => props.setModalVisible(false)}
        />
      )}

      <Footer />
    </div>
  );
}
