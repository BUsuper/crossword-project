import crossword from "../../assets/crosswords"

export function QuestionsBlock({direction}) {
    return <div>
        <h1>{direction === "right" ? "Accross" : "Down"}</h1>
        <div>
            {crossword.map(row => {
                row.map(cell => {
                    if (cell[1] && cell[2] === direction) {
                        return <p>{cell[0]}</p>
                    }
                })
            })}
        </div>
    </div>
}