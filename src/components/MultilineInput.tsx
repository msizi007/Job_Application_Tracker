interface Props {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export default function MultilineInput(props: Props) {
  return (
    <textarea
      rows={4}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={`${props.className} mb-2 p-2 w-100 text-muted`}
    ></textarea>
  );
}
