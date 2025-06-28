import "./CrosswordCell.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsChecking, selectIsShowingAnswers } from "../../slices/statusesSelectors";
import { useEffect, useState } from "react";
import { setHasErrors } from "../../slices/statusesSlice";
import { selectIsVerticalSelection, selectSelectedCell } from "../../slices/selectedSelectors";
import { setIsVerticalSelection, setSelectedCell } from "../../slices/selectedSlice";
import { selectHorizontalIterationOrder, selectVerticalIterationOrder } from "../../slices/crosswordSelectors";

export function CrosswordCell({x, y, correctAnswer, number, direction, isInSelectionList, iterationOrder, tabIndex}) {
    const isChecking = useSelector(selectIsChecking);
    const isShowingAnswers = useSelector(selectIsShowingAnswers);
    const selectedCell = useSelector(selectSelectedCell);
    const isVerticalSelection = useSelector(selectIsVerticalSelection);
    const verticalIterationOrder = useSelector(selectVerticalIterationOrder);
    const horizontalIterationOrder = useSelector(selectHorizontalIterationOrder);
    const [userLetter, setUserLetter] = useState("");

    const dispatch = useDispatch();

    const inputId = `${y}:${x}`;

    const isCurrentlySelected = selectedCell === inputId;

    const convertId = id => id.split(":").map(id => +id);

    // Focuses on the next cell in the iteration order and changes selectedCell accordingly
    const focusNext = (id, iterationOrder) => {
        let currentId = convertId(id);
        let currentIndex = iterationOrder.findIndex(
            cellId => cellId[0] === currentId[0] && cellId[1] === currentId[1]
        );

        while (true) {
            if (currentIndex < (iterationOrder.length - 1)) {
                const nextCellId = iterationOrder[currentIndex + 1].join(":");
                const nextCell = document.getElementById(nextCellId);
                
                if (!nextCell.value) {
                    dispatch(setSelectedCell(nextCellId));
                    nextCell.focus();
                    break;
                }
            } else {
                break;
            }
        }
    }

    const handleInputChange = (e, id) => {
        const userInput = e.target.value;
        setUserLetter(userInput);
        const iterationOrder = isVerticalSelection ? verticalIterationOrder : horizontalIterationOrder;

        if (userInput.length > 0) {
            focusNext(id, iterationOrder)
        }
    }

    /* const handleInputChange = (e, nextIndex) => {
        const userInput = e.target.value;
        // Gets an iterable object with all Letter Containers
        const letterContainersList = document.getElementsByClassName("letterContainer");

        setUserLetter(userInput);

        // Checks if the next element exists in the list of Letter Containers
        // by comparing its length and the next index
        // Checks if there is new input so the focus doesn't jump when a letter is deleted
        if (userInput.length > 0 && letterContainersList.length > nextIndex) {
            dispatch(setSelectedCell(letterContainersList[nextIndex].id));
            letterContainersList[nextIndex].focus();
        }

        // TODO: add moving to the previous cell if it exists and backspace is pressed in an empty cell
    }
        */

    // Make selection direction change if the same cell is clicked twice
    const handleClick = (currentCellId, isCurrentlySelected) => {
        if (isCurrentlySelected) {
            dispatch(setIsVerticalSelection(!isVerticalSelection));
        } else {
            dispatch(setSelectedCell(currentCellId))
        }
    }

    // This is used when letter is rendered and checking mode is active to determine
    // if the user's input is a correct answer and determine the input tag class
    // accordingly to change the color of the letter
    const isCorrectLetter = userLetter === correctAnswer;

    // If the letter is wrong and the checking mode is on, dispatch the action
    // useEffect ensures that it's done when isChecking changes, not during the render (that would cause an error)
    // If at least one letter triggers hasErrors (because it's not correct), you can't win
    useEffect(() => {
        if (isChecking && !isCorrectLetter) dispatch(setHasErrors(true));
    }, [isChecking, isCorrectLetter, dispatch]);

    // tabIndex starts at 1, so it can be used as next index in the list of Crossword Cells
    // that is 0-indexed
    return (
        <div 
            id={`CrosswordCell${y},${x}`}
            className={"CrosswordCell" + " " + `${isInSelectionList ? "inSelectedList" : ""}`}
        >
            <div className="upperRow">
                <span className="numberContainter">
                    {number}
                </span>
                <span className="rightArrowContainer">
                    {direction === "right" ? "→" : ""}
                </span>
            </div>
            <div className="bottomRow">
                <span className="downArrowContainer">
                    {direction === "down" ? "↓" : ""}
                </span>
                <input
                    type="text" 
                    id={inputId} 
                    className={"letterContainer" + " " +
                        `${isChecking ?
                            isCorrectLetter ? "correctLetter" : "wrongLetter" :
                            ""
                        }` + " " + 
                        `${isInSelectionList ? "inSelectedList" : ""}`
                        }
                    maxLength={1}
                    onChange={(e) => handleInputChange(e, inputId, iterationOrder)}
                    onClick={() => handleClick(inputId, isCurrentlySelected)}
                    disabled={isChecking}
                    autoComplete="off"
                    tabIndex={tabIndex}
                    value={ isShowingAnswers ? correctAnswer : userLetter}
                >
                </input>
            </div>
        </div>
    );
}