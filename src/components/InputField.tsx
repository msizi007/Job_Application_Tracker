import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

interface Props {
  for?: string;
  type: string;
  placeholder: string;
  field: string;
  setField: Dispatch<SetStateAction<string>>;
  icon?: IconType;
  style?: React.CSSProperties;
}

export default function InputField(props: Props) {
  return (
    <div style={{ ..._inputGroup, ...props.style }}>
      {props.icon ? (
        <div style={_inputIcon}>
          <props.icon />
        </div>
      ) : null}
      <input
        type={props.type}
        style={_input}
        placeholder={props.placeholder}
        value={props.field}
        onChange={(e) => props.setField(e.target.value)}
        required
      />
    </div>
  );
}

const _inputGroup: React.CSSProperties = {
  display: "flex",
};

const _inputIcon: React.CSSProperties = {
  padding: ".5rem",
  border: "1px solid black",
};

const _input: React.CSSProperties = {
  width: "100%",
  marginLeft: "-1px",
};
