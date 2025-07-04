import { useDispatch } from "react-redux";
import crosswords from "../../assets/crosswords";
import { setSelectedCrossword } from "../../slices/selectedSlice";

export function CrosswordSelection() {
    const crosswordNames = Object.keys(crosswords);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // target is the whole form, crosswords is the name of select in it
        const selectedCrossword = e.target.elements.crosswords.value;
        dispatch(setSelectedCrossword(selectedCrossword));
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