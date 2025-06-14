import { createSlice } from "@reduxjs/toolkit";

const statusesSlice = createSlice({
    name: "statuses",

    initialState: {
        isChecking: false,
        isFinished: false,
        hasErrors: false,
        isEndgameModalOpen: false,
    },

    reducers: {
        setIsChecking: (state, action) => {
            state.isChecking = action.payload;
        },
        
        setIsFinished: (state, action) => {
            state.isFinished = action.payload;
        },

        setHasErrors: (state, action) => {
            state.hasErrors = action.payload;
        },

        setIsEndgameModalOpen: (state, action) => {
            state.isEndgameModalOpen = action.payload;
        },
    }
});

export const { setIsChecking, setIsFinished, setHasErrors, setIsEndgameModalOpen } = statusesSlice.actions;

export default statusesSlice.reducer;