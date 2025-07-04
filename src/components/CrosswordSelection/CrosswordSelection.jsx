import { useDispatch } from "react-redux";
import crosswords from "../../assets/crosswords";
import { setSelectedCrossword } from "../../slices/selectedSlice";
import { setCrossword, setHorizontalIterationOrder, setVerticalIterationOrder } from "../../slices/crosswordSlice";

export function CrosswordSelection() {
    const crosswordNames = Object.keys(crosswords);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // target is the whole form, crosswords is the name of select in it
        const selectedCrossword = e.target.elements.crosswords.value;
        dispatch(setSelectedCrossword(selectedCrossword));
        dispatch(setCrossword(selectedCrossword))
        dispatch(setVerticalIterationOrder(selectedCrossword));
        dispatch(setHorizontalIterationOrder(selectedCrossword));
    }

    return (
        <form name="CrosswordSelectionForm" onSubmit={handleSubmit}>
            <select name="crosswords" id="CrosswordsSelection">
                {crosswordNames.map(name => 
                    <option value={name} key={name}>{name}</option>
                )}
            </select>
            <input type="submit" value="Select"></input>
        </form>
    );
}