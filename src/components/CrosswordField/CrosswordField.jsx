import "./CrosswordField.css"
import { LetterBox } from "../LetterBox/LetterBox";

export default function CrosswordField() {
    const columns = 4;
    const rows = 5;
    const COMPONENT_SIZE = 50;

    const field = Array(rows).fill(0);

    // width and height are magic numbers for now
    return <div id="CrosswordField" style={{width: `${columns * COMPONENT_SIZE}px`, height: `${rows * COMPONENT_SIZE}px`}}>
        {
            field.map((row, rowNumber) => (
                Array(columns).fill(0).map((column, columnNumber) => (
                    <LetterBox x={columnNumber} y={rowNumber} key={`x${columnNumber}y${rowNumber}`}></LetterBox>
                ))
            ))
        }
    </div>
}