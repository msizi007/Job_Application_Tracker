import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function LandingNav() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h2>Job Tracker</h2>
      <Button text="Login" onclick={() => navigate("/login")} />
    </div>
  );
}
