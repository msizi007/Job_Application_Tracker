import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Image from "../components/Image";
import LoginImage from "../assets/still.webp";
import { useState } from "react";
import axios from "axios";
import { BsPersonFill, BsLockFill } from "react-icons/bs";
import { Color } from "../context/_css";
export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function loginUser() {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      );

      const user = response.data.filter(
        (res: { username: string; password: string }) => {
          return (
            res.username === username.trim() && res.password === password.trim()
          );
        }
      );

      if (user.length > 0) {
        alert("Login successful!");
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
    <div style={_loginPage}>
      <div style={_container}>
        <form action="" style={_form}>
          <InputField
            style={_input}
            type="text"
            for="username"
            placeholder="Username..."
            field={username}
            setField={setUsername}
            icon={BsPersonFill}
          />
          <InputField
            style={_input}
            type="password"
            for="password"
            placeholder="Password..."
            field={password}
            setField={setPassword}
            icon={BsLockFill}
          />

          <p style={_form_p}>
            Don't have an account? <Link to="/signup">sign up</Link> now.
          </p>
          <Button
            style={_form_button}
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

const _loginPage: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const _container: React.CSSProperties = {
  width: "50%",
  height: "50%",
  display: "flex",
  padding: "1rem",
};

const _form: React.CSSProperties = {
  width: "50%",
  border: "2px solid black",
  padding: "1rem",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const _form_p: React.CSSProperties = {
  margin: "1rem 0",
  fontSize: ".8rem",
};

const _form_button: React.CSSProperties = {
  width: "50%",
  padding: ".5rem 1rem",
  backgroundColor: Color.Indigo,
  color: Color.White,
  fontFamily: "InterBold",
  borderRadius: ".5rem",
};

const _input: React.CSSProperties = {
  margin: "1rem 0",
};
