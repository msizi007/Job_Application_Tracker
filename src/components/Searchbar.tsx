import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  return (
    <div style={searchBar}>
      <input style={searchInput} type="text" placeholder="Search..." />
      <div style={searchIcon}>
        <BsSearch />
      </div>
    </div>
  );
}

const searchBar: React.CSSProperties = {
  display: "flex",
};

const searchInput: React.CSSProperties = {
  padding: ".5rem",
  border: "none",
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: "1rem",
};
const searchIcon: React.CSSProperties = {
  padding: "0 .5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#d9d9d9",
  borderTopRightRadius: "1rem",
  borderBottomRightRadius: "1rem",
  fontSize: "1.2rem",
  marginLeft: "-1px",
};
