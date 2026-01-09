import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import Image from "../components/Image";
import LoginImage from "../assets/still.webp";
import { useState } from "react";
import axios from "axios";
import type { LoginCredentials, User } from "../models/User";
import { setUser } from "../utils/auth";
import "./pages.css";
import { Color } from "../context/_css";

const BASE_URL = "https://json-server1-uini.onrender.com/users";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function loginUser() {
    try {
      if (!username || !password) {
        alert("Error: All fields are required!");
        return;
      }

      const response = await axios.get(
        `${BASE_URL}?username=${username}&password=${password}`
      );

      const user = response.data;

      if (user.length > 0) {
        console.log("User logged in:", user[0].id);
        alert("Login successful!");
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
