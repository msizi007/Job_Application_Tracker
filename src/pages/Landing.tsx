import LandingNav from "../components/LandingNav/LandingNav";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button";
import Image from "../components/Image";
import LandingImage from "../assets/relaxed.jpg";
import { useNavigate } from "react-router-dom";
import { Color } from "../context/_css";
import "./pages.css";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <LandingNav />
      <div className="body">
        <div className="left">
          <h1 className="title">Simplify Your Job Hunt</h1>
          <p className="sub-title">
            A smarter way to manage applications, follow-ups and career progress
          </p>
          <div className="btn-container">
            <Button
              width={50}
              color="white"
              bg={Color.Indigo}
              text="Get Started"
              onclick={() => navigate("/signup")}
            />
          </div>
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
