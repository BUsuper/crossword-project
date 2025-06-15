import { useDispatch, useSelector } from "react-redux";
import "./EndgameModal.css";
import closeModalLogo from "../../assets/close.svg"
import { selectHasErrors } from "../../slices/statusesSelectors";
import { setIsEndgameModalOpen, setIsShowingAnswers } from "../../slices/statusesSlice";

export function EndgameModal() {
    const hasErrors = useSelector(selectHasErrors);

    const dispatch = useDispatch();

    return (
        <div id="EndgameModal">
            <div className="modalUpperRow">
                <img 
                    id="closeEndgameModalButton"
                    src={closeModalLogo} 
                    onClick={() => dispatch(setIsEndgameModalOpen(false))}>
                </img>
            </div>
            <div className="modalResultsRow">
                { hasErrors ? 
                  "You can see the correct answers by clicking the button below" :
                  "Congratulations! You've finished the crossword in 999 seconds"
                }
            </div>
            <div className="modalBottomRow">
                { hasErrors ? <input type="button" value="Show answers" onClick={() => dispatch(setIsShowingAnswers(true))}></input> : "" }
            </div>
        </div>
    )
}