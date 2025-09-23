import Footer from "../components/Footer/Footer";
import Image from "../components/Image";
import Navbar from "../components/Navbar/Navbar";
import notFoundImg from "../assets/404.jpg";

export default function NotFound404() {
  return (
    <div style={_404}>
      <Navbar />
      <div style={_body}>
        <Image src={notFoundImg} alt="404 Error Image" size={50} />
      </div>

      <Footer />
    </div>
  );
}

const _404: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const _body: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
