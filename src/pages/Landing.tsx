import LandingNav from "../components/LandingNav/LandingNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "../components/Image";
import LandingImage from "../assets/relaxed.jpg";
import { useNavigate } from "react-router-dom";
import { Color } from "../context/_css";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div style={_landingPage}>
      <LandingNav />
      <div style={_body}>
        <div style={_left}>
          <h1 style={_title}>Simplify Your Job Hunt</h1>
          <p style={_p}>
            A smarter way to manage applications, follow-ups and career progress
          </p>
          <Button
            style={_btnGetStarted}
            text="Get Started"
            onclick={() => navigate("/signup")}
          />
        </div>
        <Image
          src={LandingImage}
          alt="catoon image of a relaxing buddy."
          size={50}
        />
      </div>
      <Footer />
    </div>
  );
}

const _landingPage: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const _body: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "84%",
};

const _left: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "40%",
  textAlign: "center",
};

const _title: React.CSSProperties = {
  fontSize: "2.5rem",
  fontFamily: "InterBold",
  color: Color.Indigo,
  marginBottom: "0",
};

const _p: React.CSSProperties = {
  fontSize: ".9rem",
  fontFamily: "InterBold",
  marginTop: "0",
  marginBottom: "2rem",
};

const _btnGetStarted: React.CSSProperties = {
  backgroundColor: Color.Indigo,
  color: Color.White,
  padding: "0.5rem 1.5rem",
  borderRadius: ".5rem",
  fontSize: "1.2rem",
  alignSelf: "center",
};
