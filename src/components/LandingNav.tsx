import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Color } from "../context/types";
export default function LandingNav() {
  const navigate = useNavigate();
  return (
    <div style={style.navbar}>
      <h2>Job Tracker</h2>
      <Button
        style={style.button}
        text="Login"
        onclick={() => navigate("/login")}
      />
    </div>
  );
}

const style: { [key: string]: React.CSSProperties } = {
  navbar: {
    height: "8vh",
    display: "flex",
    padding: "0.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.Gray,
    fontSize: "0.8rem",
    position: "relative",
    zIndex: 1,
  },
  button: {
    border: "none",
    padding: ".5rem 1.5rem",
    backgroundColor: Color.Mantis,
    color: Color.White,
    borderRadius: ".5rem",
  },
};
