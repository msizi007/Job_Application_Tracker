import React from "react";

interface Props {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

export default function InputField(props: Props) {
  const { value, onChange, type, placeholder, required } = props;

  // 1. FIX: Generate a unique ID
  const inputId = React.useId();

  return (
    <div className="form-floating mb-3 w-100">
      <input
        type={type}
        className="form-control w-100"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
