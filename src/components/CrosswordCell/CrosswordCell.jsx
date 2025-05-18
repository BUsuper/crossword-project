import "./CrosswordCell.css"

export function CrosswordCell({x, y, letter, number}) {
    return <div className="CrosswordCell" id={`CrosswordCell(${y},${x})`}>
        <div className="upperRow">
            <span className="numberContainter">
                {number}
            </span>
            <span className="rightArrowContainer">
                
            </span>
        </div>
        <div className="bottomRow">
            <span className="downArrowContainer"></span>
            <span className="letterContainer">
                {letter}
            </span>
        </div>
    </div>
}