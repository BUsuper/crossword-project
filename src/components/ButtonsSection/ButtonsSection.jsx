import { useDispatch } from "react-redux";
import { setIsChecking } from "../../slices/statusesSlice";

export function ButtonsSection() {
    const dispatch = useDispatch();

    const checkCrossword = () => {
        console.log("Checking the crossword");
        dispatch(setIsChecking(true));
    }

    return <div>
        <input type="button" onClick={checkCrossword} value="Check"></input>
    </div>
}