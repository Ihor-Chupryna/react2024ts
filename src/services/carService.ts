import { IResponse } from "../types";
import { ICar, IPagination } from "../interfaces";
import { apiService } from "./apiService";
import { urls } from "../constants";

const carService = {
    getAll: (): IResponse<IPagination<ICar>> => apiService.get(urls.cars.all)
}
export { carService }