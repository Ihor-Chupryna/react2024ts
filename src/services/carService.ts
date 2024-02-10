import { apiService } from "./apiService";
import { urls } from "../constants/urls";
import { ICar } from "../interfaces/carInterface";
import { IResponse } from "../types/responseType";

const carService = {
    getAll: (): IResponse<ICar[]> => apiService.get(urls.allCars),
    create: (data: ICar): IResponse<ICar> => apiService.post(urls.allCars, data),
    updateById: (id: number, data: ICar): IResponse<ICar> => apiService.put(urls.carById(id), data),
    deleteBuId: (id: number): IResponse<void> => apiService.delete(urls.carById(id))
}

export { carService }