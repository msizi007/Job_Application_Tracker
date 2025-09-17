interface Props {
  for: string;
  label: string;
  type: string;
  placeholder: string;
}

export default function InputField(props: Props) {
  return (
    <div className="input-field">
      <label htmlFor={props.for}>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
