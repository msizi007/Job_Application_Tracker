import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

interface Props {
  for: string;
  type: string;
  placeholder: string;
  field: string;
  setField: Dispatch<SetStateAction<string>>;
  icon: IconType;
}

export default function InputField(props: Props) {
  return (
    <div style={_inputGroup}>
      <div style={_inputIcon}>{props.icon && <props.icon />}</div>
      <input
        type={props.type}
        style={_input}
        id="inlineFormInputGroupUsername"
        placeholder="Username"
        value={props.field}
        onChange={(e) => props.setField(e.target.value)}
        required
      />
    </div>
  );
}

const _inputGroup: React.CSSProperties = {
  margin: "1.5rem 0",
  display: "flex",
};

const _inputIcon: React.CSSProperties = {
  padding: ".5rem",
  border: "1px solid black",
};

const _input: React.CSSProperties = {
  width: "100%",
};
