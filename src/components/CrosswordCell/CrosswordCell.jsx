import "./CrosswordCell.css"

export default function CrosswordCell({x, y, letter, number, direction}) {
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
            <span className="letterContainer">
                {letter}
            </span>
        </div>
    </div>
}