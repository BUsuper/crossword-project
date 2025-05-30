import { configureStore } from "@reduxjs/toolkit";
import statucesReducer from "../slices/statusesSlice";

const store = configureStore({
    reducer: {
        statuses: statucesReducer,
    },
})

export default store;