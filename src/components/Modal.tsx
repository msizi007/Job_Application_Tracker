import React from "react";

interface Props {
  title: string;
  content?: React.ReactNode;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: Props) {
  return (
    <div style={_modal}>
      <div style={_btn_close} onClick={() => props.onClose(false)}>
        &times;
      </div>
      <h2>{props.title}</h2>
      {props.content}
    </div>
  );
}

const _modal: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "2rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  borderRadius: "8px",
  width: "400px",
  maxWidth: "90%",
};

const _btn_close: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "1.5rem",
  cursor: "pointer",
};
