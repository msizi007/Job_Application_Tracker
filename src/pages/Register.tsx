import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import LoginImage from "../assets/still.webp";
import Image from "../components/Image";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsLock, BsPerson } from "react-icons/bs";

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
    <div className="register-page">
      <div className="container">
        <form action="#">
          <InputField
            type="text"
            for="username"
            label="Username:"
            placeholder="Username..."
            field={username}
            setField={setUsername}
            icon={BsPerson}
          />
          <InputField
            type="password"
            for="password"
            label="Password:"
            placeholder="Password..."
            field={password}
            setField={setPassword}
            icon={BsLock}
          />
          <InputField
            type="password"
            for="confirm-password"
            label="Confirm Password:"
            placeholder="Confirm Password..."
            field={confirmPassword}
            setField={setConfirmPassword}
            icon={BsLock}
          />
          <p>
            Already have an account? <Link to="/login">Log in</Link> instead.
          </p>
          <Button text="Register" onclick={registerUser} />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}
