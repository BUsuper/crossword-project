import crossword from "../../assets/crosswords"

export function QuestionsBlock({direction}) {
    return <div>
        <h1>{direction === "right" ? "Across" : "Down"}</h1>
        <div>
            {crossword.map(row =>
                row.map(cell => {
                    if (cell[0] && cell[1] === direction) {
                        return <p key={`${cell[2]}${cell[1]}`}>{`${cell[2]}) ${cell[0]}`}</p>
                    }
                })
            )}
        </div>
    </div>
}