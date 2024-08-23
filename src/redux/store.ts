import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemonResult} from "../models/IPokemonPaginationModel/IPokemonResult";
import {pokemonService} from "../services/api.service";
import {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";
import {IPokemon} from "../models/IPokemon/IPokemon";

type PokemonPaginationResultType = {
    pokemonResult: IPokemonResult[]
    count: number,
    pokemonList: IPokemon[]
}

const initialPokemonSliceState: PokemonPaginationResultType = {
    pokemonResult: [],
    count: 0,
    pokemonList: []
}

const loadPokemonWithPagination = createAsyncThunk(
    "pokemonPaginationResultSlice/loadPokemon",
    async (offset:string, thunkAPI) => {
        try {
            const resp = await pokemonService.getAllPokemon(offset)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }

    }
)

const loadPokemonList = createAsyncThunk(
    "pokemonSlice/loadPokemon",
    async (url:string[], thunkAPI) => {
        try {
            const resp = await pokemonService.getPokemonList(url)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    }
)

export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: initialPokemonSliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPokemonWithPagination.fulfilled, (state, action) => {
                state.pokemonResult = action.payload.results
                state.count = action.payload.count
            })
            .addCase(loadPokemonList.fulfilled, (state, action) => {
                state.pokemonList = action.payload
            })
    }
})

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemonWithPagination,
    loadPokemonList
}

export const store = configureStore({
    reducer: {
        pokemonPaginationResultSliceState: pokemonSlice.reducer
    }
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()