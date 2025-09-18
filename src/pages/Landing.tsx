import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "../components/Image";
import LandingImage from "../assets/relaxed.jpg";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div style={_landingPage}>
      <LandingNav />
      <div style={_body}>
        <div className="left">
          <h1>Simplify Your Job Hunt</h1>
          <p>
            A smarter way to manage applications, follow-ups and career progress
          </p>
          <Button text="Get Started" onclick={() => navigate("/signup")} />
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
