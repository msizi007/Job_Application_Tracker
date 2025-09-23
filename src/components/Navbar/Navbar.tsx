import Avatar from "../Avatar";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Job Tracker</h1>
      <div className={styles.right}>
        <Searchbar />
        <Avatar />
      </div>
    </div>
  );
}
