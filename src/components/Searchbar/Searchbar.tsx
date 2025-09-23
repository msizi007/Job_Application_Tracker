import { BsSearch } from "react-icons/bs";
import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
      />
      <div className={styles.searchIcon}>
        <BsSearch />
      </div>
    </div>
  );
}
