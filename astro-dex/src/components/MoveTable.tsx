import type { FunctionComponent } from "preact";

const MoveTable : FunctionComponent<{  moves: Array<{}> }> = ({ moves }) => {
  
    return (
        <table>
            <thead>
                <tr>Level</tr>
                <tr>Name</tr>
                <tr>Type</tr>
                <tr>Category</tr>
                <tr>Power</tr>
                <tr>PP</tr>
                <tr>Accuracy</tr>
                <tr>Priority</tr>
                <tr>Generation</tr>
            </thead>
            <tbody>
                {moves.map((move) => (
                    <tr>
                        <td></td>
                        <td>{move.move.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MoveTable;