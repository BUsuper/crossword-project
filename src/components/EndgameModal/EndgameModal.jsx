import { useSelector } from "react-redux";
import "./EndgameModal.css";
import { selectHasErrors } from "../../slices/statusesSelectors";

export function EndgameModal() {
    const hasErrors = useSelector(selectHasErrors)

    return (
        <div id="EndgameModal">
            <div className="modalUpperRow">
                <img id="closeEndgameModalButton"></img>
            </div>
            <div className="modalResultsRow">
                Congratulations! You've finished the crossword in 999 seconds
            </div>
            <div className="modalBottomRow">
                { hasErrors ? <input type="button" value="Show answers"></input> : "" }
            </div>
        </div>
    )
}