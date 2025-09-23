import { BsEyeFill, BsPenFill } from "react-icons/bs";
import type { Job } from "../models/Job";
import { RiDeleteBin5Fill } from "react-icons/ri";

import IconButton from "./IconButton";
import axios from "axios";
import Modal from "./Modal";
import Button from "./Button";
import { useState } from "react";
import InputField from "./InputField";

interface Props {
  head: string[];
  data: Job[];
}

export default function Table(props: Props) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  function onRemoveJob(job: Job) {
    setShowDeleteModal(true);
    setSelectedJob(job);
  }

  function onUpdateJob(job: Job) {
    setShowUpdateModal(true);
    setSelectedJob(job);
  }

  function removeJob(id: string) {
    axios
      .delete(`http://localhost:3000/jobs/${id}`)
      .then(() => {
        alert("Job removed sucessfully.");
      })
      .catch((error) => {
        alert("Cannot remove job." + error);
      });
  }

  function updateJob(id: string) {
    const newJob = {
      title: selectedJob!.title,
      company: selectedJob!.company,
      location: selectedJob!.location,
      role: selectedJob!.role,
      status: selectedJob!.status,
      dateApplied: selectedJob!.dateApplied,
      userId: selectedJob!.userId,
    };
    axios
      .put(`http://localhost:3000/jobs/${id}`, newJob)
      .then(() => {
        alert("Job updated sucessfully.");
      })
      .catch((error) => {
        alert("Cannot update job." + error);
      });
  }
  return (
    <table style={_table}>
      <thead style={_th}>
        <tr>
          {props.head.map((data, i) => (
            <th key={i}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => (
          <tr key={i}>
            <td>{row.title}</td>
            <td>{row.company}</td>
            <td>{row.location}</td>

            <td
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid lightgray",
              }}
            >
              <IconButton icon={BsEyeFill} onclick={() => {}} />
              <IconButton
                icon={BsPenFill}
                onclick={() => {
                  onUpdateJob(row);
                }}
              />
              <IconButton
                icon={RiDeleteBin5Fill}
                onclick={() => {
                  onRemoveJob(row);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
      {showDeleteModal && (
        <Modal
          title="Are you sure you want to delete this job?"
          content={
            <div>
              <Button
                text="Yes"
                onclick={() => {
                  removeJob(selectedJob!.id);
                  setShowDeleteModal(false);
                }}
              />
              <Button text="No" onclick={() => setShowDeleteModal(false)} />
            </div>
          }
          onClose={() => setShowDeleteModal(false)}
        />
      )}
      {showUpdateModal && (
        <Modal
          title="Update Form"
          content={
            <div>
              <InputField
                placeholder={"Job title"}
                type="text"
                field={title}
                setField={setTitle}
              />
              <InputField
                placeholder={"Company"}
                type="text"
                field={company}
                setField={setCompany}
              />
              <InputField
                placeholder={"Role"}
                type="text"
                field={role}
                setField={setRole}
              />
              <InputField
                placeholder={"Location"}
                type="text"
                field={location}
                setField={setLocation}
              />
              <Button
                text="Update"
                onclick={() => {
                  updateJob(selectedJob!.id);
                  setShowUpdateModal(false);
                }}
              />
            </div>
          }
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </table>
  );
}

const _table: React.CSSProperties = {
  marginTop: "2rem",
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid lightgray",
};

const _th: React.CSSProperties = {
  textAlign: "center",
  borderBottom: "2px solid lightgray",
  padding: "1rem 2rem",
};
