import { configureStore } from "@reduxjs/toolkit";
import statucesReducer from "../slices/statusesSlice";
import selectedReducer from "../slices/selectedSlice";

const store = configureStore({
    reducer: {
        statuses: statucesReducer,
        selected: selectedReducer,
    },
})

export default store;