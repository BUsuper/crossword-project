import configureStore from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        statuses: statucesReducer,
    },
})

export default store;