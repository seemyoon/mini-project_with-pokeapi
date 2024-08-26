import {createAsyncThunk} from "@reduxjs/toolkit";
import {pokemonSearchService} from "../../services/api.service";
import {AxiosError} from "axios";

export const loadPokemonByName = createAsyncThunk(
    "pokemonSearchByName",
    async (name: string, thunkAPI) => {
        try {
            const response = await pokemonSearchService.getPokemonByName(name)
            return thunkAPI.fulfillWithValue(response)
        } catch (error) {
            const axiosError = error as AxiosError
            if (axiosError) {
                if (axiosError.response?.status === 404) {
                    return thunkAPI.rejectWithValue("Pokemon not found");
                }
            }
            return thunkAPI.rejectWithValue("An error occurred");
        }
    })

export const loadPokemonByAbility = createAsyncThunk(
    "pokemonSearchByAbility",
    async (nameAbility: string, thunkAPI) => {
        try {
            const response = await pokemonSearchService.getPokemonByAbility(nameAbility)
            return thunkAPI.fulfillWithValue(response)
        } catch (error) {
            const axiosError = error as AxiosError
            if (axiosError) {
                if (axiosError.response?.status === 404) {
                    return thunkAPI.rejectWithValue("Pokemon not found");
                }
            }
            return thunkAPI.rejectWithValue("An error occurred");
        }
    })

