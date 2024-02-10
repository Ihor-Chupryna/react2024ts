import { useEffect, useState } from "react";

import { CarForm } from "../CarForm/CarForm";
import { ICar } from "../../interfaces/carInterface";
import { carService } from "../../services/carService";
import { Car } from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    const changeTrigger = (): void => {
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>)}
        </div>
    );
};

export { Cars };