import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onclick: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  style?: React.CSSProperties;
}

export default function IconButton(props: Props) {
  return (
    <button style={{ ...props.style, ..._button }} onClick={props.onclick}>
      <props.icon />
    </button>
  );
}

const _button: React.CSSProperties = {
  border: "1px solid lightgray",
  margin: "0 .5rem",
  padding: ".8rem",
};
