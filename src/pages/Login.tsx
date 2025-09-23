import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import Image from "../components/Image";
import LoginImage from "../assets/still.webp";
import { useState } from "react";
import axios from "axios";
import { BsPersonFill, BsLockFill } from "react-icons/bs";
import type { User } from "../models/User";
import { setUser } from "../utils/auth";
import "./pages.css";
import { Color } from "../context/_css";

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export default function Login(props: LoginProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function loginUser() {
    try {
      const response = await axios.get(
        `https://msizi007.pythonanywhere.com/users?username=${username}&password=${password}`
      );

      const user = response.data.filter(
        (res: { id: string; username: string; password: string }) => {
          return (
            res.username === username.trim() && res.password === password.trim()
          );
        }
      );

      if (user.length > 0) {
        console.log("User logged in:", user[0].id);
        alert("Login successful!");
        props.setUser(user[0]);
        setUser(user[0]);
        navigate("/home");
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <form action="">
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

          <p>
            Don't have an account? <Link to="/signup">sign up</Link> now.
          </p>
          <Button
            width={50}
            color="white"
            bg={Color.Mantis}
            text="Login"
            onclick={(e) => {
              e!.preventDefault();
              loginUser();
            }}
          />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}
