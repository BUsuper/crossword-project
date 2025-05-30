import "./CrosswordCell.css";
import { useSelector } from "react-redux";
import { selectIsChecking } from "../../slices/statusesSelectors";
import { useState } from "react";

// Letter is the answer, userLetter is what user types in
export function CrosswordCell({x, y, letter, number, direction}) {
    // isChecking is triggered globally by a check button
    const isChecking = useSelector(selectIsChecking);
    const [userLetter, setUserLetter] = useState("");

    const handleInputChange = e => {
        setUserLetter(e.target.value);
    }

    // This is used when letter is rendered and checking mode is active to determine
    // if the user's input is a correct answer and determine the input tag class
    // accordingly to change the color of the letter
    const isCorrectLetter = userLetter === letter;

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
                    onChange={handleInputChange}
                    disabled={isChecking && "true"}
                >
                </input>
            </div>
        </div>
    );
}