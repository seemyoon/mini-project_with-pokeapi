import {IPokemonResult} from "../../models/IPokemonPaginationModel/IPokemonResult";
import {IPokemon} from "../../models/IPokemon/IPokemon";
import {IPokemonMainForm} from "../../models/IPokemonMainForm/IPokemonMainForm";
import {createSlice} from "@reduxjs/toolkit";
import {
    loadFormPokemon, loadFormPokemonByUrl,
    loadPokemonById,
    loadPokemonList,
    loadPokemonWithPagination
} from "../../reducers/pokemonSlice/pokemonSlice.extra.reducers";

type PokemonPaginationResultType = {
    pokemonResult: IPokemonResult[],
    count: number,
    pokemonList: IPokemon[],
    pokemon: IPokemon | null,
    formPokemon: IPokemonMainForm | null,
    urlForm: IPokemonMainForm[]
}

const initialPokemonSliceState: PokemonPaginationResultType = {
    pokemonResult: [],
    count: 0,
    pokemonList: [],
    pokemon: null,
    formPokemon: null,
    urlForm: []
}


export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: initialPokemonSliceState,
    reducers: {
    },
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
                state.formPokemon = action.payload
            })
            .addCase(loadFormPokemonByUrl.fulfilled, (state, action) => {
                state.urlForm = action.payload
            })
    }
})


export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemonWithPagination,
    loadPokemonList,
    loadPokemonById,
    loadFormPokemon,
    loadFormPokemonByUrl
}
