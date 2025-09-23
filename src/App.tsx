import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useState } from "react";
import type { User } from "./models/User";
import NotFound404 from "./pages/404";
import type { Job } from "./models/Job";

function App() {
  const [user, setUser] = useState<User>({
    id: "",
    username: "",
    password: "",
  });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/home"
          element={
            <Home
              user={user}
              setUser={setUser}
              jobs={jobs}
              setJobs={setJobs}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          }
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
