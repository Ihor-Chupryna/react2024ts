import { AxiosResponse } from "axios";

type IResponse<T> = Promise<AxiosResponse<T>>

export type { IResponse }