import { IResponse } from "../types";
import { IPost } from "../interfaces/postInterface";
import { apiService } from "./apiService";
import { urls } from "../constants";

const postService = {
    getAll: (): IResponse<IPost[]> => apiService.get(urls.posts.all),
    getById: (id: number): IResponse<IPost> => apiService.get(urls.posts.byId(id))
}

export { postService }