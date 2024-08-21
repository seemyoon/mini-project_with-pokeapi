import {configureStore, createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {IPokemonResult} from "../models/IPokemonPaginationModel/IPokemonResult";
import {pokemonService} from "../services/api.service";
import {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";

type PokemonPaginationResultType = {
    pokemonResult: IPokemonResult[]
    next: string | null,
    previous: string | null,
    count: number,
}

const initialPokemonSliceState: PokemonPaginationResultType = {
    pokemonResult: [],
    next: null,
    previous: null,
    count: 0
}

const loadPokemonWithPagination = createAsyncThunk(
    "pokemonPaginationResultSlice/loadPokemon",
    async (_, thunkAPI) => {

        try {
            const resp = await pokemonService.getAllPokemon()
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }

    }
)

export const pokemonPaginationResultSlice = createSlice({
    name: "pokemonSlice",
    initialState: initialPokemonSliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPokemonWithPagination.fulfilled, (state, action) => {
                state.pokemonResult = action.payload.results
                state.next = action.payload.next
                state.previous = action.payload.previous
                state.count = action.payload.count
            })
        // .addCase(loadPokemonWithPagination.rejected, (state, action) => {
        // })
    }
})

export const pokemonActions = {
    ...pokemonPaginationResultSlice.actions,
    loadPokemonWithPagination
}

export const store = configureStore({
    reducer: {
        pokemonPaginationResultSliceState: pokemonPaginationResultSlice.reducer
    }
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()