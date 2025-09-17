interface Props {
  text: string;
  onclick: () => void | Promise<void>;
}

export default function Button(props: Props) {
  return (
    <div className="btn-container">
      <button onClick={props.onclick}>{props.text}</button>
    </div>
  );
}
