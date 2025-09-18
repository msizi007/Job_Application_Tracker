import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

interface Props {
  for: string;
  label: string;
  type: string;
  placeholder: string;
  field: string;
  setField: Dispatch<SetStateAction<string>>;
  icon: IconType;
}

export default function InputField(props: Props) {
  return (
    <div className="input-field">
      <label htmlFor={props.for}>{props.label}</label>
      <div className="input-wrapper">
        {props.icon && (
          <div className="icon">
            <props.icon />
          </div>
        )}
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.field}
          onChange={(e) => props.setField(e.target.value)}
        />
      </div>
    </div>
  );
}
