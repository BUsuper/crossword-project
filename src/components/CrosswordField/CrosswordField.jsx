import "./CrosswordField.css"
import { CrosswordCell } from "../CrosswordCell/CrosswordCell";
import crossword from "../../assets/crosswords";

export default function CrosswordField() {
    // Get height(rows) and width(columns) of the crossword object
    const columns = Object.keys(crossword[0]).length;
    const rows = Object.keys(crossword).length;
    const COMPONENT_SIZE = 50;

    const field = Array(rows).fill(0);

    return (
        <table id="CrosswordField" style={{width: `${columns * COMPONENT_SIZE}px`, height: `${rows * COMPONENT_SIZE}px`}}>
            <tbody>
            {
                crossword.map((row, rowNumber) => (
                    <tr key={`row${rowNumber}`}>
                    {
                        row.map((column, columnNumber) => (
                            <td key={`x${columnNumber}y${rowNumber}`} className={!(crossword[rowNumber][columnNumber]) ? "emptyCell" : ""}>
                                {
                                    <CrosswordCell x={columnNumber} y={rowNumber} direction={crossword[rowNumber][columnNumber][0]} number={crossword[rowNumber][columnNumber][1]} letter={crossword[rowNumber][columnNumber][2]}></CrosswordCell>
                                }
                            </td>
                        ))
                    }
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}