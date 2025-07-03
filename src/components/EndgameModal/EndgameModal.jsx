import { useDispatch, useSelector } from "react-redux";
import "./EndgameModal.css";
import closeModalLogo from "../../assets/close.svg"
import { selectHasErrors, selectTime } from "../../slices/statusesSelectors";
import { setIsEndgameModalOpen, setIsShowingAnswers } from "../../slices/statusesSlice";

export function EndgameModal() {
    const hasErrors = useSelector(selectHasErrors);
    const { minutes, seconds } = useSelector(selectTime);

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
                  `Congratulations! You've finished the crossword in ${minutes} ${minutes === 1 ? "minute" : "minutes"} ${seconds} ${seconds === 1 ? "second" : "seconds"}`
                }
            </div>
            <div className="modalBottomRow">
                { hasErrors ? <input type="button" value="Show answers" onClick={() => dispatch(setIsShowingAnswers(true))}></input> : "" }
            </div>
        </div>
    )
}