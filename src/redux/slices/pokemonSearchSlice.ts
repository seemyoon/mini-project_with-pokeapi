import {createSlice} from "@reduxjs/toolkit";
import {
    loadPokemonByAbility,
    loadPokemonByName
} from "../../reducers/pokemonSearchSlice/pokemonSearchSlice.extra.reducers";
import {IPokemon} from "../../models/IPokemon/IPokemon";
import {IPokemonMainAbility} from "../../models/IPokemonMainAbility/IPokemonMainAbility";

type PokemonSearchSliceState = {
    pokemonByNameResult: IPokemon | null,
    pokemonByAbilityResult: IPokemonMainAbility | null,
    error: string | null;

}

const initialPokemonSearchSliceState: PokemonSearchSliceState = {
    pokemonByNameResult: null,
    pokemonByAbilityResult: null,
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
            });
    }
})

export const pokemonSearchActions = {
    ...pokemonSearchSlice.actions,
    loadPokemonByName,
    loadPokemonByAbility
}