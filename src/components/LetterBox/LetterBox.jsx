import "./LetterBox.css"

export function LetterBox({x, y}) {
    return <div className="LetterBox" id={`LetterBox(${y},${x})`}>
        Hello World
    </div>
}