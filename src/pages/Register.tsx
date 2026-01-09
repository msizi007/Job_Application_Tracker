import { Link } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button";
import LoginImage from "../assets/still.webp";
import Image from "../components/Image";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { User } from "../models/User";
import { isValidEmail } from "../utils/validator";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const BASE_URL = "https://json-server1-uini.onrender.com/users";

  function registerUser() {
    const payload: User = {
      username: username,
      email: email,
      password: password,
    };

    if (!username || !email || !password || !confirmPassword) {
      alert("Error: All fields are required!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Error: Invalid email format!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
      return;
    }

    axios
      .post(BASE_URL, payload)
      .then(() => {
        navigate("/login");
        alert("User registered successfully!");
      })
      .catch((error) => {
        alert("Error registering user:" + error);
      });
  }

  return (
    <div style={_registerPage}>
      <div style={_container}>
        <form action="" style={_form}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p style={_p}>
            Already have an account? <Link to="/login">Log in</Link> instead.
          </p>
          <Button
            color="white"
            bg="#3b82f6"
            text="Register"
            onclick={(e) => {
              e!.preventDefault();
              registerUser();
            }}
          />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}

const _registerPage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const _container: React.CSSProperties = {
  width: "50%",
  height: "50%",
  display: "flex",
};

const _form: React.CSSProperties = {
  width: "50%",
  height: "100%",
  border: "2px solid black",
  borderRadius: "2rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const _p: React.CSSProperties = {
  fontSize: ".8rem",
  margin: "1rem",
};
