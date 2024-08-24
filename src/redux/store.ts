import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {pokemonFormSlice} from "./slices/pokemonFormSlice";
import {pokemonSlice} from "./slices/pokemonSlice";
import {pokemonSearchSlice} from "./slices/pokemonSearchSlice";


export const store = configureStore({
    reducer: {
        pokemonSliceState: pokemonSlice.reducer,
        pokemonFormSlice: pokemonFormSlice.reducer,
        pokemonSearchSlice: pokemonSearchSlice.reducer
    }
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()