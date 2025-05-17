import "./CrosswordField.css"
import { LetterBox } from "../LetterBox/LetterBox";
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
                field.map((row, rowNumber) => (
                    <tr key={`row${rowNumber}`}>
                    {
                        Array(columns).fill(0).map((column, columnNumber) => (
                            <td key={`x${columnNumber}y${rowNumber}`} className={!(crossword[rowNumber][columnNumber]) ? "emptyCell" : ""}>
                                {
                                    <LetterBox x={columnNumber} y={rowNumber} letter={crossword[rowNumber][columnNumber]}></LetterBox>
                                    
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