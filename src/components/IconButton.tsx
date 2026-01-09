import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onclick: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  bg: string;
}

export default function IconButton(props: Props) {
  return (
    <button
      className="btn btn-lg"
      style={{
        backgroundColor: props.bg,
      }}
      onClick={props.onclick}
    >
      <props.icon size={20} color="white" />
    </button>
  );
}
