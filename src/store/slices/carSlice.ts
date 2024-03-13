import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { ICar, IPagination } from "../../interfaces";
import { carService } from "../../services/carService";

interface IState {
    cars: ICar[]
}

const initialState: IState = {
    cars: []
};

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items
            })
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll
}

export { carReducer, carActions }