import {createSlice} from "@reduxjs/toolkit";

type PokemonFormSliceStateType = {
    chooseFormId: number,
}

const initialPokemonFormSliceState: PokemonFormSliceStateType = {
    chooseFormId: 0
}

export const pokemonFormSlice = createSlice({
    name: "pokemonFormSlice",
    initialState: initialPokemonFormSliceState,
    reducers: {
        chooseForm: (state, action) => {
            state.chooseFormId = action.payload
        }
    }
})
export const pokemonFormActions = {
    ...pokemonFormSlice.actions
}

export const {chooseForm} = pokemonFormSlice.actions
