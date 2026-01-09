import { BsEyeFill, BsPenFill } from "react-icons/bs";
import type { Job, Status } from "../../models/Job";
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
import { BiBriefcase, BiSolidBuildingHouse, BiMap } from "react-icons/bi"; // Added new icons
import DropdownList from "../DropdownList";
import MultilineInput from "../MultilineInput";

interface Props {
  head: string[];
  data: Job[];
}

const BASE_URL = "https://json-server1-uini.onrender.com/jobs";

export default function Table(props: Props) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("Applied");
  const navigate = useNavigate();

  // ... (Utility functions onRemoveJob, onUpdateJob, removeJob, updateJob remain unchanged) ...
  function onRemoveJob(job: Job) {
    setShowDeleteModal(true);
    setSelectedJob(job);
  }

  function onUpdateJob(job: Job) {
    setShowUpdateModal(true);
    setSelectedJob(job);
    setCompany(job.company);
    setRole(job.role);
    setLocation(job.location);
    setDescription(job.description);
    setStatus(job.status);
  }

  function removeJob(id: string) {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(() => {
        alert("Job removed sucessfully.");
        // Optional: Trigger a state update or data refetch here
        window.location.reload();
      })
      .catch((error) => {
        alert("Cannot remove job." + error);
      });
  }

  function updateJob(id: string) {
    const newJob: Job = {
      id: id,
      company,
      location,
      role,
      status,
      description,
      dateApplied: selectedJob!.dateApplied,
      userId: selectedJob!.userId,
    };

    if (
      newJob.description === "" ||
      newJob.company === "" ||
      newJob.role === "" ||
      newJob.location === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .put(`${BASE_URL}/${id}`, newJob)
      .then(() => {
        alert("Job updated sucessfully.");
        window.location.reload();
      })
      .catch((error) => {
        alert("Cannot update job." + error);
      });
  }

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {props.head.map((data, i) => (
              <th key={i} className={styles.thCell}>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, i) => (
            <tr key={i} className={styles.tableRow}>
              <td className={styles.tableCell}>{row.role}</td>
              <td className={styles.tableCell}>{row.company}</td>
              <td className={styles.tableCell}>{row.location}</td>
              <td className={`${styles.tableCell} `}>{row.status}</td>
              <td className={styles.tableCell}>{row.dateApplied as string}</td>

              {/* Use a class for action buttons, replacing inline style */}
              <td className={styles.actionsCell}>
                {/* VIEW Button */}
                <IconButton
                  bg={Color.Gray}
                  icon={BsEyeFill}
                  onclick={() => {
                    navigate(`/jobs/${row.id}`);
                  }}
                />
                {/* EDIT Button (Mantis/Green is often used for Edit) */}
                <IconButton
                  bg={Color.Mantis}
                  icon={BsPenFill}
                  onclick={() => {
                    onUpdateJob(row);
                  }}
                />
                {/* DELETE Button (Indigo/Red is often used for Delete) */}
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
      </table>
      {/* --- Delete Confirmation Modal --- */}
      {showDeleteModal && selectedJob && (
        <Modal
          title={`Confirm Deletion for: ${selectedJob.role}`}
          onClose={() => setShowDeleteModal(false)}
          content={
            <div className={styles.modalContent}>
              <p className={styles.deleteWarning}>
                Are you sure you want to delete the job application for
                <strong> {selectedJob.role} </strong> at
                <strong> {selectedJob.company}</strong>? This action cannot be
                undone.
              </p>
              <div className={styles.buttonGroup}>
                <Button
                  color="white"
                  bg={Color.Indigo} // Use a strong delete color
                  text="Yes, Delete"
                  onclick={() => {
                    removeJob(selectedJob.id!);
                    setShowDeleteModal(false);
                  }}
                />
                <Button
                  color="black"
                  bg="transparent" // Transparent for a secondary/cancel button
                  text="Cancel"
                  onclick={() => setShowDeleteModal(false)}
                />
              </div>
            </div>
          }
        />
      )}

      {/* --- Update Form Modal --- */}
      {showUpdateModal && selectedJob && (
        <Modal
          title={`Update Job: ${selectedJob.role}`}
          onClose={() => setShowUpdateModal(false)}
          content={
            <div className={styles.modalForm}>
              {/* 🔑 Updated InputFields to use modern UI variants and icons */}
              <InputField
                placeholder={"Role"}
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <InputField
                placeholder={"Company"}
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                icon={<BiSolidBuildingHouse size={20} />}
              />
              <MultilineInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="text-muted"
              />
              <InputField
                placeholder={"Location"}
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                icon={<BiMap size={20} />}
              />
              <DropdownList
                options={["Applied", "Interviewed", "Rejected"]}
                onChange={(e) => setStatus(e.target.value as Status)}
                className="w-100"
              />

              <div className={styles.updateButtonContainer}>
                <Button
                  width={100}
                  color="white"
                  bg={Color.Mantis}
                  text="Save Changes"
                  onclick={(e) => {
                    e?.preventDefault();
                    updateJob(selectedJob.id!);
                    setShowUpdateModal(false);
                  }}
                />
              </div>
            </div>
          }
        />
      )}
    </>
  );
}
