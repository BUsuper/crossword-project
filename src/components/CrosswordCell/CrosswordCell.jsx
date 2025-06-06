import "./CrosswordCell.css";
import { useSelector } from "react-redux";
import { selectIsChecking } from "../../slices/statusesSelectors";
import { useState } from "react";

// letter is the answer, userLetter is what user types in
export function CrosswordCell({x, y, letter, number, direction, tabIndex}) {
    // isChecking is triggered globally by a check button
    const isChecking = useSelector(selectIsChecking);
    const [userLetter, setUserLetter] = useState("");

    const handleInputChange = (e, nextIndex) => {
        const userInput = e.target.value;
        // Gets an iterable object with all Letter Containers
        const letterContainersList = document.getElementsByClassName("letterContainer");

        setUserLetter(userInput);

        // Checks if the next element exists in the list of Letter Containers
        // by comparing its length and the next index
        // Checks if there is new input so the focus doesn't jump when a letter is deleted
        if (userInput.length > 0 && letterContainersList.length > nextIndex) {
            letterContainersList[nextIndex].focus();
        }
    }

    // This is used when letter is rendered and checking mode is active to determine
    // if the user's input is a correct answer and determine the input tag class
    // accordingly to change the color of the letter
    const isCorrectLetter = userLetter === letter;

    // tabIndex starts at 1, so it can be used as next index in the list of Crossword Cells
    // that is 0-indexed
    return (
        <div className="CrosswordCell" id={`CrosswordCell(${y},${x})`}>
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
                    id={`letter(${y},${x})`} 
                    className={"letterContainer" + 
                        `${isChecking ?
                            isCorrectLetter ? " correctLetter" : " wrongLetter" :
                            ""
                        }`
                        }
                    maxLength={1}
                    onChange={(e) => handleInputChange(e, tabIndex)}
                    disabled={isChecking}
                    autoComplete="off"
                    tabIndex={tabIndex}
                >
                </input>
            </div>
        </div>
    );
}