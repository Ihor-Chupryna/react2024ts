import { apiService } from "./apiService";
import { urls } from "../constants";
import { IResponse } from "../types";
import { ICar } from "../interfaces";

const carService = {
    getAll: (): IResponse<ICar[]> => apiService.get(urls.cars.all),
    create: (data: ICar): IResponse<ICar> => apiService.post(urls.cars.all, data),
    update: (id: string, data: ICar): IResponse<ICar> => apiService.put(urls.cars.byId(id), data),
    delete: (id: string): IResponse<void> => apiService.delete(urls.cars.byId(id))
}

export { carService }