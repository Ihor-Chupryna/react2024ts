import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { Car } from "./Car";
import { carActions } from "../store";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };