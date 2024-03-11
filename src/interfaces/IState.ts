import { ICar } from "./ICar";

export interface IState {
    cars: ICar[];
    carForUpdate: ICar;
    trigger: boolean;
}