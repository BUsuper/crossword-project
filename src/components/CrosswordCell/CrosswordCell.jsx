import "./CrosswordCell.css"

export function CrosswordCell({x, y, letter, number, direction}) {
    return <div className="CrosswordCell" id={`CrosswordCell(${y},${x})`}>
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
                <input type="text" id={`letter(${y},${x})`} className="letterContainer" maxLength={1}></input>
        </div>
    </div>
}