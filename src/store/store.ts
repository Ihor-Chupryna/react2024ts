import { configureStore } from "@reduxjs/toolkit";

import { carReducer } from "./slices";

const store = configureStore({
    reducer: {
        carReducer
    }
});

export { store }
