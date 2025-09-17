import Button from "../components/Button";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Image from "../components/Image";
import LoginImage from "../assets/still.webp";
export default function Login() {
  return (
    <div className="login-page">
      <div className="container">
        <form action="#">
          <InputField
            type="text"
            for="username"
            label="Username:"
            placeholder="Username..."
          />
          <InputField
            type="password"
            for="password"
            label="Password:"
            placeholder="Password..."
          />

          <p>
            Don't have an account? <Link to="/signup">sign up</Link> now.
          </p>
          <Button text="Login" onclick={() => {}} />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}
