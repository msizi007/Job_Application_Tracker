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
    // 🔑 Use a container for full page flex/grid setup
    <div className="landing-page-container">
      <LandingNav />

      {/* 🔑 Hero section for the main content */}
      <div className="hero-section">
        {/* === LEFT: Marketing Copy === */}
        <div className="hero-content">
          <h1 className="title neon-glow">Simplify Your Job Hunt</h1>
          <p className="sub-title responsive-text">
            A smarter way to manage applications, follow-ups, and accelerate
            your career progress.
          </p>

          <div className="features-list">
            {/* Added short, benefit-driven list for immediate value */}
            <p>✅ Track progress effortlessly</p>
            <p>✅ Never miss a follow-up</p>
            <p>✅ Visualize your career path</p>
          </div>

          <div className="btn-container cta-margin">
            <Button
              width={100} // Increased width for better CTA prominence
              color="white"
              bg={Color.Indigo} // Assuming Color.Indigo is a bold blue/purple
              text="Get Started Now"
              onclick={() => navigate("/signup")}
            />
          </div>
        </div>

        {/* === RIGHT: Image/Visual === */}
        <div className="hero-image-container">
          <Image
            src={LandingImage}
            alt="Cartoon image of a relaxing person using a device, representing work-life balance."
            size={100} // Let CSS handle the size
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
