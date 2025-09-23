import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onclick: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  bg: string;
}

export default function IconButton(props: Props) {
  return (
    <button
      style={{
        border: "1px solid lightgray",
        margin: ".5rem",
        padding: ".8rem",
        borderRadius: ".5rem",
        backgroundColor: props.bg,
      }}
      onClick={props.onclick}
    >
      <props.icon size={15} color="white" />
    </button>
  );
}
