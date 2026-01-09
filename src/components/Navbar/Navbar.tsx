import { useNavigate } from "react-router-dom";
import { removeUser } from "../../utils/auth";
import styles from "./navbar.module.css";

interface Props {
  loggedIn: boolean;
}

export default function Navbar(props: Props) {
  const navigate = useNavigate();
  function logout() {
    removeUser();
    navigate("/login");
  }
  return (
    // The class remains the same
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Job Tracker</h1>
      <div className={styles.right}>
        {props.loggedIn && (
          <button className="btn btn-outline-danger" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
