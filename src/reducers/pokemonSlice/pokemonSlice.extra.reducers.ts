import {createAsyncThunk} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/api.service";
import {AxiosError} from "axios";

export const loadPokemonWithPagination = createAsyncThunk(
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

export const loadPokemonList = createAsyncThunk(
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

export const loadPokemonById = createAsyncThunk(
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

export const loadFormPokemon = createAsyncThunk(
    "pokemonSlice/loadFormPokemon",
    async (id:number, thunkAPI) => {
        try {
            const resp = await pokemonService.getFormById(id)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    })


export const loadFormPokemonByUrl = createAsyncThunk(
    "pokemonSlice/loadFormPokemonByUrl",
    async (url: string[], thunkAPI) => {
        try {
            const resp = await pokemonService.getFormByUrl(url)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    }
)
export const loadFavouritePokemonById = createAsyncThunk(
    "pokemonSlice/loadFavouritePokemonById",
    async (id: string[], thunkAPI) => {
        try {
            const resp = await pokemonService.getFavouritePokemonById(id)
            return thunkAPI.fulfillWithValue(resp)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    }
)