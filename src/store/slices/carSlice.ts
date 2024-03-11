import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { ICar, IState } from "../../interfaces";
import { carService } from "../../services";

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const updateById = createAsyncThunk<void, { id: string, car: ICar }>(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.update(id, car)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const deleteById = createAsyncThunk<void, { id: string }>(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.delete(id)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })

            .addMatcher(isFulfilled(create, updateById, deleteById), state => {
                state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
}

export { carReducer, carActions }