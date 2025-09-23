import Button from "../Button";
import { useNavigate } from "react-router-dom";
import styles from "./landingNav.module.css";
import { Color } from "../../context/_css";

export default function LandingNav() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>Job Tracker</h2>
      <Button
        color={Color.White}
        bg={Color.Mantis}
        padding="1rem"
        text="Login"
        onclick={() => navigate("/login")}
      />
    </div>
  );
}
