import createSlice from "@reduxjs/toolkit";

const statusesSlice = createSlice({
    name: "statuses",
    initialState: {
        isChecking: false,
        isFinished: false,
    },
    reducers: {
        setIsChecking: (state, action) => {
            state.isChecking = action.payload;
        },
        
        setIsFinished: (state, action) => {
            state.isFinished = action.payload;
        }
    }
});

export const { setIsChecking, setIsFinished } = statusesSlice.actions;

export default statusesSlice.reducer;