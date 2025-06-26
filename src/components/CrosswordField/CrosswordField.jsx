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

    /* Vertical selection: Check each column. If a column has a down arrow - check each cell below.
    When an arrow is found, put the cell in the list, move to the next cell (below).
    If a cell doesn't have an arrow, but is active and placed concecutively after the one with an arrow,
    it belongs to the list.
    If an inactive cell is encountered, it's not included the search for an arrow starts again.
    If an active cell is encountered, but there is no down arrow, it's not a part of a word placed
    vertically, so it doesn't belong to the list.
    When we run out of elements in the column, move right to the next column 
    The algorithm is the same for horizontal selection, the only change is direction */
    const createIterationOrder = (crossword, numberOfColumns, numberOfRows, direction) => {
        /* The direction determines whether we iterate over columns or rows (first dimention)
        iteration inside a column/row is in the second dimension */
        const firstDimentionLength = direction === "down" ? numberOfColumns : numberOfRows;
        const secondDimentionLength = direction === "down" ? numberOfRows : numberOfColumns;

        const iterationOrder = [];

        for (let i = 0; i < firstDimentionLength; i++) {

            let isArrowFound = false;

            for (let j = 0; j < secondDimentionLength; j++) {
                // If we first iterate over columns, then the first iteration variable is a column index
                const column = direction === "down" ? i : j;
                const row = direction === "down" ? j : i;

                if (isArrowFound) {
                    if (crossword[row][column]?.[1] === direction) {
                        iterationOrder.push([row, column]);
                        continue;
                    } else {
                        if (crossword[row][column]) {
                            iterationOrder.push([row, column]);
                            continue;
                        } else {
                            isArrowFound = false;
                            continue;
                        };
                    }
                } else {
                    if (crossword[row][column]?.[1] === direction) {
                        iterationOrder.push([row, column]);
                        isArrowFound = true;
                        continue;
                    } continue;
                }
            }
        }

        return iterationOrder;
    }

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