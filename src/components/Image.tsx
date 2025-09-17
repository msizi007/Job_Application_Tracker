interface Props {
  src: string;
  alt: string;
  size: number;
}

export default function Image(props: Props) {
  return (
    <div className="img-container" style={{ width: `${props.size}%` }}>
      <img src={props.src} alt={props.alt} width="100%" />
    </div>
  );
}
