interface Props {
  text: string;
  onclick: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  style?: React.CSSProperties;
}

export default function Button(props: Props) {
  return (
    <button style={{ ...props.style, ..._button }} onClick={props.onclick}>
      {props.text}
    </button>
  );
}

const _button: React.CSSProperties = {
  border: "none",
};
