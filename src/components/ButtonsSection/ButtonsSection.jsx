import { useDispatch, useSelector } from "react-redux";
import { setIsChecking } from "../../slices/statusesSlice";
import { selectIsChecking } from "../../slices/statusesSelectors";

export function ButtonsSection() {
    const dispatch = useDispatch();
    const isChecking = useSelector(selectIsChecking);

    // Toggles checking mode
    const toggleCheck = () => {
        dispatch(setIsChecking(!isChecking));
    }

    // It says "Change answers" because editing is disabled (in CrosswordCell) in checking mode
    return <div>
        <input
            type="button" 
            onClick={toggleCheck} 
            value={isChecking ? "Change answers" : "Check"}
        >
        </input>
    </div>
}