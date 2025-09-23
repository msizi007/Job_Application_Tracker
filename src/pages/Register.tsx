import { Link } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button";
import LoginImage from "../assets/still.webp";
import Image from "../components/Image";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsLockFill, BsPersonFill } from "react-icons/bs";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  function registerUser() {
    console.log("register user...", username, password, confirmPassword);

    if (password === confirmPassword) {
      const user = {
        username: username,
        password: password,
      };
      axios
        .post("http://localhost:3000/users", user)
        .then(() => {
          navigate("/login");
          alert("User registered successfully!");
        })
        .catch((error) => {
          alert("Error registering user:" + error);
        });
    } else {
      alert("Password does not match!");
    }
  }

  return (
    <div style={_registerPage}>
      <div style={_container}>
        <form action="" style={_form}>
          <InputField
            type="text"
            for="username"
            placeholder="Username..."
            field={username}
            setField={setUsername}
            icon={BsPersonFill}
          />
          <InputField
            type="password"
            for="password"
            placeholder="Password..."
            field={password}
            setField={setPassword}
            icon={BsLockFill}
          />
          <InputField
            type="password"
            for="confirm-password"
            placeholder="Confirm Password..."
            field={confirmPassword}
            setField={setConfirmPassword}
            icon={BsLockFill}
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
