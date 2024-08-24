import {createSlice} from "@reduxjs/toolkit";
import {loadPokemonByName} from "../../reducers/pokemonSearchSlice/pokemonSearchSlice.extra.reducers";
import {IPokemon} from "../../models/IPokemon/IPokemon";

type PokemonSearchSliceState= {
    pokemonByNameResult: IPokemon | null
}

const initialPokemonSearchSliceState: PokemonSearchSliceState ={
    pokemonByNameResult: null,
}

export const pokemonSearchSlice = createSlice({
    name: "pokemonSearchSlice",
    initialState: initialPokemonSearchSliceState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(loadPokemonByName.fulfilled, (state, action) => {
                state.pokemonByNameResult = action.payload
            })

    }
    })

export const pokemonSearchActions = {
    ...pokemonSearchSlice.actions,
    loadPokemonByName
}