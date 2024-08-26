import {createSlice} from "@reduxjs/toolkit";
import {
    loadPokemonByAbility,
    loadPokemonByName, loadPokemonByTypes
} from "../../reducers/pokemonSearchSlice/pokemonSearchSlice.extra.reducers";
import {IPokemon} from "../../models/IPokemon/IPokemon";
import {IPokemonMainAbility} from "../../models/IPokemonMainAbility/IPokemonMainAbility";
import {IPokemonMainTypes} from "../../models/IPokemonMainTypes/IPokemonMainTypes";

type PokemonSearchSliceState = {
    pokemonByNameResult: IPokemon | null,
    pokemonByAbilityResult: IPokemonMainAbility | null,
    pokemonByTypeResult: IPokemonMainTypes | null,
    allPokemon: { name: string; url: string }[] | null,
    error: string | null;

}

const initialPokemonSearchSliceState: PokemonSearchSliceState = {
    pokemonByNameResult: null,
    pokemonByAbilityResult: null,
    pokemonByTypeResult: null,
    allPokemon: null,
    error: null,
}

export const pokemonSearchSlice = createSlice({
    name: "pokemonSearchSlice",
    initialState: initialPokemonSearchSliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPokemonByName.fulfilled, (state, action) => {
                state.pokemonByNameResult = action.payload
                state.error = null;
            })
            .addCase(loadPokemonByName.rejected, (state, action) => {
                state.pokemonByNameResult = null;
                state.error = action.payload as string;
            })
            .addCase(loadPokemonByAbility.fulfilled, (state, action) => {
                state.pokemonByAbilityResult = action.payload
                state.error = null;
            })
            .addCase(loadPokemonByAbility.rejected, (state, action) => {
                state.pokemonByAbilityResult = null;
                state.error = action.payload as string;
            })
            .addCase(loadPokemonByTypes.fulfilled, (state, action) => {
                state.pokemonByTypeResult = action.payload
                state.error = null;
            })
            .addCase(loadPokemonByTypes.rejected, (state, action) => {
                state.pokemonByTypeResult = null;
                state.error = action.payload as string;
            })
    }
})

export const pokemonSearchActions = {
    ...pokemonSearchSlice.actions,
    loadPokemonByName,
    loadPokemonByAbility,
    loadPokemonByTypes,
}