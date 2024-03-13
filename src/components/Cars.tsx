import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { carActions } from "../store";
import { Car } from "./Car";


const Cars = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };