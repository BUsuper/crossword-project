import "./CrosswordCell.css"

export function CrosswordCell({x, y, letter, number}) {
    return <div className="CrosswordCell" id={`CrosswordCell(${y},${x})`}>
        {number}
        {letter}
    </div>
}