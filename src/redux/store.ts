import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemonResult} from "../models/IPokemonPaginationModel/IPokemonResult";
import {pokemonService} from "../services/api.service";
import {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";
import {IPokemon} from "../models/IPokemon/IPokemon";
import {IPokemonMainForm} from "../models/IPokemonMainForm/IPokemonMainForm";

type PokemonPaginationResultType = {
    pokemonResult: IPokemonResult[],
    count: number,
    pokemonList: IPokemon[],
    pokemon: IPokemon | null,
    formPokemonList: IPokemonMainForm | null
}

const initialPokemonSliceState: PokemonPaginationResultType = {
    pokemonResult: [],
    count: 0,
    pokemonList: [],
    pokemon: null,
    formPokemonList: null
}


const loadPokemonWithPagination = createAsyncThunk(
    "pokemonPaginationResultSlice/loadPokemon",
    async (offset: string, thunkAPI) => {
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
    async (urls: string[], thunkAPI) => {
        try {
            const resp = await pokemonService.getPokemonList(urls)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    }
)

const loadPokemonById = createAsyncThunk(
    "pokemonSlice/loadPokemonById",
    async (id: string, thunkAPI) => {
        try {
            const resp = await pokemonService.getPokemonById(id)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }

    }
)

const loadFormPokemon = createAsyncThunk(
    "pokemonSlice/loadFormPokemon",
    async (id:number, thunkAPI) => {
        try {
            const resp = await pokemonService.getForm(id)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    })

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
            .addCase(loadPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload
            })
            .addCase(loadFormPokemon.fulfilled, (state, action) => {
                state.formPokemonList = action.payload
            })
    }
})

type PokemonFormSliceStateType = {
    chooseForm: string,
    toggleForm: boolean
}

const initialPokemonFormSliceState: PokemonFormSliceStateType ={
    chooseForm: "default" || "shiny",
    toggleForm: false
}

export const pokemonFormSlice = createSlice({
    name: "pokemonFormSlice",
    initialState: initialPokemonFormSliceState,
    reducers: {
        chooseForm: (state, action) => {
            state.chooseForm = action.payload
        },
        toggleForm: (state, action) => {
            state.toggleForm = action.payload
        }
    }
})

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemonWithPagination,
    loadPokemonList,
    loadPokemonById,
    loadFormPokemon
}

export const pokemonFormActions ={
    ...pokemonFormSlice.actions
}

export const {chooseForm, toggleForm} = pokemonFormSlice.actions

export const store = configureStore({
    reducer: {
        pokemonSliceState: pokemonSlice.reducer,
        pokemonFormSlice: pokemonFormSlice.reducer,
    }
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()