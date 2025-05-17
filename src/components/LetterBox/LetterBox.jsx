import "./LetterBox.css"

export function LetterBox({x, y, letter}) {
    return <div className="LetterBox" id={`LetterBox(${y},${x})`}>
        {letter}
    </div>
}