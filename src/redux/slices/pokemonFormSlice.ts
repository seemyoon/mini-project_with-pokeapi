import {createSlice} from "@reduxjs/toolkit";

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
export const pokemonFormActions ={
    ...pokemonFormSlice.actions
}

export const {chooseForm, toggleForm} = pokemonFormSlice.actions
