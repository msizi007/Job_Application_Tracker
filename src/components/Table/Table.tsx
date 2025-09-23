import { BsEyeFill, BsPenFill } from "react-icons/bs";
import type { Job } from "../../models/Job";
import { RiDeleteBin5Fill } from "react-icons/ri";

import IconButton from "../IconButton";
import axios from "axios";
import Modal from "../Modal";
import Button from "../Button";
import { useState } from "react";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
import styles from "./table.module.css";
import { Color } from "../../context/_css";
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
  const navigate = useNavigate();

  function onRemoveJob(job: Job) {
    setShowDeleteModal(true);
    setSelectedJob(job);
  }

  function onUpdateJob(job: Job) {
    setShowUpdateModal(true);
    setSelectedJob(job);
    setTitle(job.title);
    setCompany(job.company);
    setRole(job.role);
    setLocation(job.location);
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
      id: id,
      title: title,
      company: company,
      location: location,
      role: role,
      status: selectedJob!.status,
      dateApplied: selectedJob!.dateApplied,
      userId: selectedJob!.userId,
    };

    if (
      newJob.title === "" ||
      newJob.company === "" ||
      newJob.role === "" ||
      newJob.location === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

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
    <table className={styles.table}>
      <thead className={styles.th}>
        <tr>
          {props.head.map((data, i) => (
            <th key={i}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => (
          <tr key={i} style={{ borderRadius: "1rem" }}>
            <td>{row.title}</td>
            <td>{row.company}</td>
            <td>{row.location}</td>

            <td
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                bg={Color.Gray}
                icon={BsEyeFill}
                onclick={() => {
                  navigate(`/jobs/${row.id}`);
                }}
              />
              <IconButton
                bg={Color.Mantis}
                icon={BsPenFill}
                onclick={() => {
                  onUpdateJob(row);
                }}
              />
              <IconButton
                bg={Color.Indigo}
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
                color="white"
                bg={Color.Indigo}
                text="Yes"
                onclick={() => {
                  removeJob(selectedJob!.id);
                  setShowDeleteModal(false);
                }}
              />
              <Button
                color="white"
                bg="gray"
                text="No"
                onclick={() => setShowDeleteModal(false)}
              />
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
                color="white"
                bg={Color.Mantis}
                text="Update"
                onclick={(e) => {
                  e?.preventDefault();
                  updateJob(selectedJob!.id);
                  setShowUpdateModal(false);
                }}
              />
            </div>
          }
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </table>
  );
}
