import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { Color } from "../context/_css";
export default function Home() {
  return (
    <div style={_homePage}>
      <Navbar />
      <div style={_body}>
        <div style={_row}>
          <h2>All Jobs</h2>
          <Button style={_button} text="Add Job" onclick={() => {}} />
        </div>
        <Table head={["Job Title", "Company", "Location"]} data={[]} />
      </div>

      <Footer />
    </div>
  );
}

const _homePage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const _body: React.CSSProperties = {
  flex: 1,
};

const _row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid lightgray",
};

const _button: React.CSSProperties = {
  backgroundColor: Color.Mantis,
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: ".5rem",
  fontSize: "1rem",
};
