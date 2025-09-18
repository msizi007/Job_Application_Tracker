import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Image from "../components/Image";
import LoginImage from "../assets/still.webp";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function loginUser() {
    const res = await axios
      .get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      )
      .then((response) => {
        return response.data.length > 0;
      });
    console.log(res);
    if (res) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid username or password!");
    }
  }
  return (
    <div className="login-page">
      <div className="container">
        <form action="#">
          <InputField
            type="text"
            for="username"
            label="Username:"
            placeholder="Username..."
            field={username}
            setField={setUsername}
          />
          <InputField
            type="password"
            for="password"
            label="Password:"
            placeholder="Password..."
            field={password}
            setField={setPassword}
          />

          <p>
            Don't have an account? <Link to="/signup">sign up</Link> now.
          </p>
          <Button text="Login" onclick={loginUser} />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}
