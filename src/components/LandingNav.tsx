import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Color } from "../context/_css";
export default function LandingNav() {
  const navigate = useNavigate();
  return (
    <div style={_navbar}>
      <h2 style={_h2}>Job Tracker</h2>
      <Button style={_button} text="Login" onclick={() => navigate("/login")} />
    </div>
  );
}

/* styles */
const _navbar: React.CSSProperties = {
  backgroundColor: Color.Gray,
  height: "8%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  position: "relative",
  zIndex: 1,
};

const _h2: React.CSSProperties = {
  fontSize: "1.5rem",
  fontFamily: "InterBold",
};

const _button: React.CSSProperties = {
  backgroundColor: Color.Mantis,
  color: Color.White,
  padding: "0.2rem 1rem",
  borderRadius: ".5rem",
  height: "fit-content",
};
