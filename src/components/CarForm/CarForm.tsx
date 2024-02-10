import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ICar } from "../../interfaces/carInterface";
import { carService } from "../../services/carService";
import css from './CarForm.module.css';
import { ISetState } from "../../types/setStateType";

interface IProps {
    changeTrigger: () => void;
    carForUpdate: ICar
    setCarForUpdate: ISetState<ICar>
}

const CarForm: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, setValue, register, handleSubmit} = useForm<ICar>();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const create: SubmitHandler<ICar> = async (data) => {
        await carService.create(data)
        changeTrigger()
        setCarForUpdate(null)
        reset()
    };

    const update: SubmitHandler<ICar> = async (data) => {
        await carService.updateById(carForUpdate.id, data)
        changeTrigger()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)} className={css.formStyle}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export { CarForm };
