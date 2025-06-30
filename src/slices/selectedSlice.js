import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: "selected",

    initialState: {
        isVerticalSelection: false,
        selectedCell: "",
    },

    reducers: {
        setIsVerticalSelection: (state, action) => {
            state.isVerticalSelection = action.payload;
        },

        setSelectedCell: (state, action) => {
            state.selectedCell = action.payload;
        }
    }
});

export const { setIsVerticalSelection, setSelectedCell } = selectedSlice.actions;

export default selectedSlice.reducer;