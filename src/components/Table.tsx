import { BsEyeFill, BsPenFill, BsRecycle } from "react-icons/bs";
import type { Job } from "../models/Job";

import IconButton from "./IconButton";

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

            <td
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid lightgray",
              }}
            >
              <IconButton icon={BsEyeFill} onclick={() => {}} />
              <IconButton icon={BsPenFill} onclick={() => {}} />
              <IconButton icon={BsRecycle} onclick={() => {}} />
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
  border: "1px solid lightgray",
};

const _th: React.CSSProperties = {
  textAlign: "center",
  borderBottom: "2px solid lightgray",
  padding: "1rem 2rem",
};
