import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import LoginImage from "../assets/still.webp";
import Image from "../components/Image";

export default function Register() {
  return (
    <div className="register-page">
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
          <InputField
            type="password"
            for="confirm-password"
            label="Confirm Password:"
            placeholder="Confirm Password..."
          />
          <p>
            Already have an account? <Link to="/login">Log in</Link> instead.
          </p>
          <Button text="Register" onclick={() => {}} />
        </form>
        <Image src={LoginImage} alt="still login image" size={50} />
      </div>
    </div>
  );
}
