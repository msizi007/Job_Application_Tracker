interface Props {
  head: string[];
  data: object[];
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
      <tbody></tbody>
      {props.data.map((row, i) => (
        <tr key={i}>
          {Object.values(row).map((value, j) => (
            <td key={j}>{value}</td>
          ))}
        </tr>
      ))}
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
