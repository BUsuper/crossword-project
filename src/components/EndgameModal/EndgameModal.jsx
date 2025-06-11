import "./EndgameModal.css";

export function EndgameModal() {
    return (
        <div id="EndgameModal">
            <div className="modalUpperRow">
                <img id="closeEndgameModalButton"></img>
            </div>
            <div className="modalResultsRow">
                Congratulations! You've finished the crossword in 999 seconds
            </div>
            <div className="modalBottomRow">
                { hasErrors ? <input type="button">Show answers</input> : "" }
            </div>
        </div>
    )
}