import { configureStore } from "@reduxjs/toolkit";

import { authReducer, carReducer } from "./slices";

const store = configureStore({
    reducer: {
        authReducer,
        carReducer
    }
});

export { store }