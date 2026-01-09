import { BsSearch } from "react-icons/bs";
import styles from "./searchbar.module.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar(props: Props) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={props.onChange}
      />
      <div className={styles.searchIcon}>
        <BsSearch />
      </div>
    </div>
  );
}
