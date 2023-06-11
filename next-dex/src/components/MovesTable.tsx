import { IPokemonMove } from "@/services/interfaces";

export function MovesTable({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return (
    <table className="moves-table">
      <thead>
        <tr>
          <th>Level</th>
          <th>Move</th>
          <th>Type</th>
          <th>Category</th>
          <th>Power</th>
          <th>PP</th>
          <th>Accuracy</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
