import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useState } from "react";
import type { User } from "./models/User";

function App() {
  const [user, setUser] = useState<User | null>(null);
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
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
