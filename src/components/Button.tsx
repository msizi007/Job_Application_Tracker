interface Props {
  text: string;
  onclick: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  color: string;
  bg: string;
  width?: number
}

export default function Button(props: Props) {
  return (
    <button
      style={{
        width: props.width ? `${props.width}%` : "",
        color: props.color,
        backgroundColor: props.bg,
        padding: "1rem",
        border: "none",
        fontSize: "700",
        fontFamily: "Inter500",
        borderRadius: ".5rem",
      }}
      onClick={props.onclick}
    >
      {props.text}
    </button>
  );
}
