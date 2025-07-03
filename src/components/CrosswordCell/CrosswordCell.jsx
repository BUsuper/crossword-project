import "./CrosswordCell.css";
import useCrosswordCell from "./useCrosswordCell";

export function CrosswordCell({x, y, correctAnswer, number, direction, isInSelectionList, tabIndex}) {
    const {
        isChecking,
        isShowingAnswers,
        isCorrectLetter,
        isCurrentlySelected,
        inputId,
        userLetter,
        handleClick,
        handleInputChange,
        handleKeyDown,
        handleKeyUp,
    } = useCrosswordCell(y, x, correctAnswer);

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
                    onChange={(e) => handleInputChange(e, inputId)}
                    onKeyUp={(e) => handleKeyUp(e, inputId)}
                    onKeyDown={(e) => handleKeyDown(e, inputId)}
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