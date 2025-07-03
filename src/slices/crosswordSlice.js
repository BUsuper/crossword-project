import { createSlice } from "@reduxjs/toolkit";
import crosswords from "../assets/crosswords";
import { createIterationOrder } from "../utils/utils";

const selectedCrossword = "3.07.2025";

const crosswordSlice = createSlice({
    name: "crossword",

    initialState: {
        crossword: crosswords[selectedCrossword],

        verticalIterationOrder: createIterationOrder(
            crosswords[selectedCrossword],
            Object.keys(crosswords[selectedCrossword][0]).length,
            Object.keys(crosswords[selectedCrossword]).length,
            "down"
        ),

        horizontalIterationOrder: createIterationOrder(
            crosswords[selectedCrossword],
            Object.keys(crosswords[selectedCrossword][0]).length,
            Object.keys(crosswords[selectedCrossword]).length,
            "right"
        ),
    },

    reducers: {
        setCrossword: (state, action) => {
            state.crossword = action.payload;
        }
    }
});

export const { setCrossword } = crosswordSlice.actions;

export default crosswordSlice.reducer;