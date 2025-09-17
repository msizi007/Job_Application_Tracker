import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "../components/Image";
import LandingImage from "../assets/relaxed.jpg";

export default function Landing() {
  return (
    <div className="landing-page">
      <LandingNav />
      <div className="body">
        <div className="left">
          <h1>Simplify Your Job Hunt</h1>
          <p>
            A smarter way to manage applications, follow-ups and career progress
          </p>
          <Button text="Get Started" onclick={() => {}} />
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
