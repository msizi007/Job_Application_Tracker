import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import { Color } from "../context/_css";
import Modal from "../components/Modal";
import InputField from "../components/InputField/InputField";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import type { Job, Status } from "../models/Job";
import type { User } from "../models/User";
import { getUser } from "../utils/auth";
import DropdownList from "../components/DropdownList";
import MultilineInput from "../components/MultilineInput";
import { sortJobs } from "../utils/filter";
import Searchbar from "../components/Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://json-server1-uini.onrender.com";

export type FilterBy = "Role" | "Company" | "Location" | "Date Applied";
export type Order = "Ascending" | "Descending";

export default function Home() {
  // STATES
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState<Job[] | []>([]);
  const [status, setStatus] = useState<Status>("Applied");
  const [description, setDescription] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filterBy, setFilterBy] = useState<FilterBy>("Role");
  const [orderBy, setOrderBy] = useState<Order>("Ascending");
  const lastFetchedJobsRef = useRef<Job[]>([]);
  const hasFetchedRef = useRef(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // EFFECTS
  useEffect(() => {
    const user = getUser() as User;
    setUser(user);
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      const sorted = sortJobs(jobs, filterBy, orderBy);
      setFilteredJobs(sorted);
    }
  }, [jobs, filterBy, orderBy]);

  useEffect(() => {
    const user = getUser() as User;

    if (user == null) {
      navigate("/login");
      return;
    }

    axios.get(`${BASE_URL}/jobs`).then((res) => {
      const fetchedData: Job[] = res.data;
      const currentUserJobs = fetchedData.filter((job: Job) => {
        return job.userId === user.id;
      });
      const isContentDifferent =
        currentUserJobs.length !== lastFetchedJobsRef.current.length;

      if (!hasFetchedRef.current || isContentDifferent) {
        setJobs(currentUserJobs);
        lastFetchedJobsRef.current = currentUserJobs;
        hasFetchedRef.current = true;
      }
    });
  }, []);

  // FUNCTIONS
  function onAddJob() {
    setShowModal(true);
  }

  function addJob() {
    setShowModal(false);

    const job: Job = {
      company,
      role,
      location,
      description,
      status,
      dateApplied: new Date().toISOString().split("T")[0],
      userId: user!.id!,
    };

    if (
      description === "" ||
      company === "" ||
      role === "" ||
      location === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .post(`${BASE_URL}/jobs`, job)
      .then(() => {
        alert("Job added sucessfully.");
        window.location.reload();
      })
      .catch((error) => {
        alert("Cannot add job." + error);
      });
    setDescription("");
    setCompany("");
    setLocation("");
    setRole("");
  }

  useEffect(() => {
    search();
  }, [searchTerm]);

  function search() {
    const filtered = jobs.filter((job: Job) => {
      return (
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredJobs(filtered);
  }

  return (
    <>
      <div className="home-page">
        <Navbar loggedIn={true} />
        <div className="body container mt-5">
          <div className="row">
            <div>
              <DropdownList
                options={["Role", "Company", "Location", "Date Applied"]}
                onChange={(e) => setFilterBy(e.target.value as FilterBy)}
                className="mx-2"
              />
              <DropdownList
                options={["Ascending", "Descending"]}
                onChange={(e) => setOrderBy(e.target.value as Order)}
              />
            </div>
            <Searchbar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Button
              color="white"
              bg={Color.Mantis}
              text="Add Job"
              onclick={onAddJob}
            />
          </div>
          <hr />
          <Table
            head={[
              "Role",
              "Company",
              "Location",
              "Status",
              "Date Applied",
              "Actions",
            ]}
            data={filteredJobs}
          />
        </div>
        {showModal && (
          <Modal
            title="Add New Job"
            content={
              <div>
                <InputField
                  type="text"
                  placeholder="Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <MultilineInput
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

                <DropdownList
                  options={["Applied", "Interviewed", "Rejected"]}
                  onChange={(e) => setStatus(e.target.value as Status)}
                  className="w-100"
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
            onClose={() => setShowModal(false)}
          />
        )}

        <Footer />
      </div>
    </>
  );
}
