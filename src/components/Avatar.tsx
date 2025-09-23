import { BsPersonFill } from "react-icons/bs";

export default function Avatar() {
  return (
    <div className="">
      <BsPersonFill
        size={60}
        style={{
          backgroundColor: "white",
          padding: ".5rem",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
