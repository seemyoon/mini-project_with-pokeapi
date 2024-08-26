import {createSlice} from "@reduxjs/toolkit";
import {loadPokemonByName} from "../../reducers/pokemonSearchSlice/pokemonSearchSlice.extra.reducers";
import {IPokemon} from "../../models/IPokemon/IPokemon";

type PokemonSearchSliceState= {
    pokemonByNameResult: IPokemon | null,
    error: string | null;

}

const initialPokemonSearchSliceState: PokemonSearchSliceState ={
    pokemonByNameResult: null,
    error: null,
}

export const pokemonSearchSlice = createSlice({
    name: "pokemonSearchSlice",
    initialState: initialPokemonSearchSliceState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(loadPokemonByName.fulfilled, (state, action) => {
                state.pokemonByNameResult = action.payload
                console.log(state.pokemonByNameResult)
                state.error = null;
            })
            .addCase(loadPokemonByName.rejected, (state, action) => {
                state.pokemonByNameResult = null;
                state.error = action.payload as string;
            });
    }
    })

export const pokemonSearchActions = {
    ...pokemonSearchSlice.actions,
    loadPokemonByName
}