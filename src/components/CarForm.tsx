import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { ICar } from "../interfaces";
import { carActions } from "../store";

const CarForm = () => {
    const {carForUpdate} = useAppSelector(state => state.carReducer);
    const {register, setValue, handleSubmit, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [setValue, carForUpdate]);

    const createCar: SubmitHandler<ICar> = (data) => {
        dispatch(carActions.create({car: data}))
        reset()
    };

    const updateCar: SubmitHandler<ICar> = (data) => {
        dispatch(carActions.updateById({id: carForUpdate.id.toString(), car: data}))
        dispatch(carActions.setCarForUpdate(null))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : createCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export { CarForm };