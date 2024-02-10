import { FC } from "react";

import { ICar } from "../../interfaces/carInterface";
import css from './Car.module.css'
import { ISetState } from "../../types/setStateType";
import { carService } from "../../services/carService";

interface IProps {
    car: ICar
    setCarForUpdate: ISetState<ICar>
    changeTrigger: () => void
}
const Car: FC<IProps> = ({car, setCarForUpdate, changeTrigger}) => {
    const {id, brand, price, year} = car
    const deleteCar = (id: number) => {
        carService.deleteBuId(id).then(({data}) => console.log(data))
        changeTrigger()
    }

    return (
        <div className={css.carStyle}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export { Car };