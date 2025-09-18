import { Color } from "../context/_css";

export default function Footer() {
  return (
    <div style={_footer}>
      <p>Ethentech</p>
      <p>&copy; 2025</p>
    </div>
  );
}

const _footer: React.CSSProperties = {
  height: "8%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: Color.Gray,
  color: Color.White,
  position: "relative",
  zIndex: 1,
};
