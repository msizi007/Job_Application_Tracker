import { Color } from "../context/_css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div style={_navbar}>
      <h1 style={_h1}>Job Tracker</h1>
      <Searchbar />
    </div>
  );
}

const _navbar: React.CSSProperties = {
  height: "8vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: Color.Gray,
  padding: "1rem",
};
const _h1: React.CSSProperties = {
  fontSize: "1.5rem",
};
