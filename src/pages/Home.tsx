import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { Color } from "../context/_css";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import { useId, useState } from "react";
import axios from "axios";
import type { Job } from "../models/Job";

interface HomeProps {
  user: {
    id: string;
    username: string;
    password: string;
    jobs: Job[];
  } | null;
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
  const jobId = useId();

  function addJob() {
    console.log("Add job...", jobTitle, company, location, role, status);
    props.setModalVisible(false);

    const jobs = props.user!.jobs;
    const job: Job = {
      id: Number(jobId),
      title: jobTitle,
      company: company,
      location: location,
      role: role,
      status: "Applied",
      dateApplied: new Date().toISOString().split("T")[0],
    };
    jobs.push(job);
    axios
      .patch(`http://localhost:3000/users/${props.user!.id}`, { jobs: jobs })
      .then(() => {
        alert("Job added sucessfully.");
      })
      .catch((error) => {
        alert("Cannot add job." + error);
      });
  }

  return (
    <div style={_homePage}>
      <Navbar />
      <div style={_body}>
        <div style={_row}>
          <h2>All Jobs</h2>
          <Button style={_button} text="Add Job" onclick={onAddJob} />
        </div>
        <Table
          head={["Job Title", "Company", "Location", "Actions"]}
          data={[{ title: "Microsoft", company: "", location: "" }]}
        />
      </div>
      {props.modalVisible && (
        <Modal
          title="Add New Job"
          content={
            <div>
              <InputField
                style={{ marginBottom: "1rem" }}
                for="jobTitle"
                type="text"
                placeholder="Job Title"
                field={jobTitle}
                setField={setJobTitle}
              />
              <InputField
                style={{ marginBottom: "1rem" }}
                type="text"
                placeholder="Company"
                field={company}
                setField={setCompany}
              />
              <InputField
                style={{ marginBottom: "1rem" }}
                type="text"
                placeholder="Location"
                field={location}
                setField={setLocation}
              />
              <InputField
                style={{ marginBottom: "1rem" }}
                type="text"
                placeholder="Role"
                field={role}
                setField={setRole}
              />
              <Button
                style={_button}
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

const _homePage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const _body: React.CSSProperties = {
  flex: 1,
};

const _row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid lightgray",
};

const _button: React.CSSProperties = {
  backgroundColor: Color.Mantis,
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: ".5rem",
  fontSize: "1rem",
};
