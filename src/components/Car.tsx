import { FC } from "react";
import { ICar } from "../interfaces";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {brand, price, year} = car;
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>
        </div>
    );
};

export { Car };