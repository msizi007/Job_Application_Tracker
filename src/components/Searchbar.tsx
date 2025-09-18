import React from "react";

export default function Searchbar() {
  return (
    <div style={searchBar}>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

const searchBar: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "5px",
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
};
