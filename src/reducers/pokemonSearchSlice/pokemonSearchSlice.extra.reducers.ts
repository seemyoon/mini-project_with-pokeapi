import {createAsyncThunk} from "@reduxjs/toolkit";
import {pokemonSearchService} from "../../services/api.service";
import {AxiosError} from "axios";

export const loadPokemonByName = createAsyncThunk(
    "pokemonSearch",
    async (name: string, thunkAPI) => {
        try {
            const response = await pokemonSearchService.getPokemonByName(name)
            return thunkAPI.fulfillWithValue(response)
        } catch (error) {
            const axiosError = error as AxiosError
            return thunkAPI.rejectWithValue(axiosError?.response?.data)
        }
    })