import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootTypes } from "../types";

const useAppSelector: TypedUseSelectorHook<RootTypes> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppSelector, useAppDispatch }