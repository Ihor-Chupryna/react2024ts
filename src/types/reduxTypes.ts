import { store } from "../store";

type RootTypes = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootTypes, AppDispatch }