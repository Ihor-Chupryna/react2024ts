import { apiService } from "./apiService";
import { IResponse } from "../types";
import { IUser } from "../interfaces";
import { urls } from "../constants";

const userService = {
    getAll: (): IResponse<IUser[]> => apiService.get(urls.users.all),
    getById: (id: number): IResponse<IUser> => apiService.get(urls.users.byId(id))
}

export { userService }