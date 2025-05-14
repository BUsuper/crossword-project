import "./CrosswordField.css"
import { LetterBox } from "../LetterBox/LetterBox";

export default function CrosswordField() {
    const columns = 4;
    const rows = 5;
    const COMPONENT_SIZE = 50;

    const field = Array(rows).fill(0);

    // TODO: wrap into a table and try to collapse borders
    return <div id="CrosswordField" style={{width: `${columns * COMPONENT_SIZE}px`, height: `${rows * COMPONENT_SIZE}px`}}>
        <table>
            <tbody>
            {
                field.map((row, rowNumber) => (
                    <tr key={`row${rowNumber}`}>
                    {
                        Array(columns).fill(0).map((column, columnNumber) => (
                            <td key={`x${columnNumber}y${rowNumber}`}>
                                {
                                    <LetterBox x={columnNumber} y={rowNumber}></LetterBox>
                                }
                            </td>
                        ))
                    }
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
}