interface Props {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}
export default function DropdownList(props: Props) {
  return (
    <select
      onChange={props.onChange}
      className={`${props.className} mb-2 p-2 text-muted`}
    >
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
