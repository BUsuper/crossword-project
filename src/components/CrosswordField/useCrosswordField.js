import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCell, selectIsVerticalSelection } from "../../slices/selectedSelectors";
import { selectCrossword } from "../../slices/crosswordSelectors";
import { selectCurrentWord, filterDirection } from "../../utils/utils";
import { setIsVerticalSelection } from "../../slices/selectedSlice";

export default function useCrosswordField() {
    // Get height(rows) and width(columns) of the crossword object
    const crossword = useSelector(selectCrossword);

    const dispatch = useDispatch();

    const [ selectedCellY, selectedCellX ] = useSelector(selectSelectedCell).split(":");
    const isVerticalSelection = useSelector(selectIsVerticalSelection);

    // A list of ids of all cells that should be highlighted as parts of selected row/column
    const cellsInSelectionList = Array.from(document
        .getElementsByClassName("CrosswordCell"))
        .map(cell => cell.id)
        .filter((cellId) => filterDirection(cellId, isVerticalSelection, selectedCellY, selectedCellX));
    
    const currentWord = selectCurrentWord(cellsInSelectionList, isVerticalSelection, selectedCellY, selectedCellX).map(id => id.join(","));

    // This prevents selection when there is no actual word, just a single cell surrounded by emtpy cells
    if (currentWord.length < 2) {
        dispatch(setIsVerticalSelection(!isVerticalSelection));
    }

    return {
        crossword,
        currentWord,
    };
}