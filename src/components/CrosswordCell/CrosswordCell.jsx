import "./CrosswordCell.css"

export function CrosswordCell({x, y, letter}) {
    return <div className="CrosswordCell" id={`CrosswordCell(${y},${x})`}>
        {letter}
    </div>
}