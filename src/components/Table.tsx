import type { Job } from "../models/Job";
import Button from "./Button";

interface Props {
  head: string[];
  data: Job[];
}

export default function Table(props: Props) {
  return (
    <table style={_table}>
      <thead style={_th}>
        <tr>
          {props.head.map((data, i) => (
            <th key={i}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => (
          <tr key={i}>
            <td>{row.title}</td>
            <td>{row.company}</td>
            <td>{row.location}</td>

            <td>
              <Button text="" onclick={() => {}} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const _table: React.CSSProperties = {
  marginTop: "2rem",
  width: "100%",
  borderCollapse: "collapse",
};

const _th: React.CSSProperties = {
  textAlign: "center",
  borderBottom: "2px solid lightgray",
  padding: "1rem 2rem",
};
