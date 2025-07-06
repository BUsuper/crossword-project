import { useSelector } from "react-redux";
import { selectSelectedCell, selectIsVerticalSelection } from "../../slices/selectedSelectors";
import { selectCrossword } from "../../slices/crosswordSelectors";
import { selectCurrentWord, filterDirection } from "../../utils/utils";

export default function useCrosswordField() {
    // Get height(rows) and width(columns) of the crossword object
    const crossword = useSelector(selectCrossword);

    const [ selectedCellY, selectedCellX ] = useSelector(selectSelectedCell).split(":");
    const isVerticalSelection = useSelector(selectIsVerticalSelection);

    // A list of ids of all cells that should be highlighted as parts of selected row/column
    const cellsInSelectionList = Array.from(document
        .getElementsByClassName("CrosswordCell"))
        .map(cell => cell.id)
        .filter((cellId) => filterDirection(cellId, isVerticalSelection, selectedCellY, selectedCellX));
    
    const currentWord = selectCurrentWord(cellsInSelectionList, isVerticalSelection, selectedCellY, selectedCellX).map(id => id.join(","));

    return {
        crossword,
        currentWord,
    };
}