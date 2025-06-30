import { createSlice } from "@reduxjs/toolkit";
import crossword from "../assets/crosswords";
import { createIterationOrder } from "../utils/utils";

const crosswordSlice = createSlice({
    name: "crossword",

    initialState: {
        crossword: crossword,

        verticalIterationOrder: createIterationOrder(
            crossword,
            Object.keys(crossword[0]).length,
            Object.keys(crossword).length,
            "down"
        ),

        horizontalIterationOrder: createIterationOrder(
            crossword,
            Object.keys(crossword[0]).length,
            Object.keys(crossword).length,
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