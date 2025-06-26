import "./CrosswordField.css"
import { CrosswordCell } from "../../components";
import { useSelector } from "react-redux";
import { selectSelectedCell, selectIsVerticalSelection } from "../../slices/selectedSelectors";
import crossword from "../../assets/crosswords";

export function CrosswordField() {
    // Get height(rows) and width(columns) of the crossword object
    const columns = Object.keys(crossword[0]).length;
    const rows = Object.keys(crossword).length;
    const COMPONENT_SIZE = 50;

    const [ selectedCellY, selectedCellX ] = useSelector(selectSelectedCell).split(":");
    const isVerticalSelection = useSelector(selectIsVerticalSelection);

    // This will be incremented only by visible crossword cells
    // It allows to pass a correct tab index starting with 1 to them
    let tabCounter = 0;

    const shortenId = cellId => cellId.slice(13).split(",");

    const filterDirection = cellId => {
        const shortenedId = shortenId(cellId);

        if (isVerticalSelection) {
            return shortenedId[0] === selectedCellY;
        }
        return shortenedId[1] === selectedCellX;
    }

    // A list of ids of all cells that should be highlighted as parts of selected row/column
    const cellsInSelectionList = Array.from(document
        .getElementsByClassName("CrosswordCell"))
        .map(cell => cell.id)
        .filter(filterDirection);

    // Crossword cells are only rendered in non-empty table cells
    return (
        <table id="CrosswordField" style={{width: `${columns * COMPONENT_SIZE}px`, height: `${rows * COMPONENT_SIZE}px`}}>
            <tbody>
            {
                crossword.map((row, rowNumber) => (
                    <tr key={`row${rowNumber}`}>
                    {
                        row.map((column, columnNumber) => (
                            <td 
                                key={`x${columnNumber}y${rowNumber}`} 
                                className={!(crossword[rowNumber][columnNumber]) ? "emptyCell" : ""}
                            >
                                {
                                    (crossword[rowNumber][columnNumber]) ?
                                        <CrosswordCell
                                            x={columnNumber}
                                            y={rowNumber}
                                            direction={crossword[rowNumber][columnNumber][1]}
                                            number={crossword[rowNumber][columnNumber][2]}
                                            correctAnswer={crossword[rowNumber][columnNumber][3]}
                                            isInSelectionList={cellsInSelectionList.includes(`CrosswordCell${rowNumber},${columnNumber}`)}
                                            tabIndex={++tabCounter}
                                        >
                                        </CrosswordCell>
                                    : ""
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