import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {pokemonActions} from "../../redux/slices/pokemonSlice";
import {useAppDispatch, useAppSelector} from "../../redux/store";

const PokemonFormComponentById = () => {
    const {formPokemon} = useAppSelector(state => state.pokemonSliceState)
    const dispatch = useAppDispatch();
    const params = useParams()

    useEffect(() => {
        if (params.id) {
            dispatch(pokemonActions.loadFormPokemon(Number(params.id)));
        }
    }, [dispatch, params.id]);
    return (
        <div>
            <h2>{formPokemon?.name}</h2>
            {<img src={formPokemon?.sprites.front_default} alt={"form of pokemon"}/>}
            {<img src={formPokemon?.sprites.back_default} alt={"form of pokemon"}/>}
            <p>Pokemon: {formPokemon?.pokemon.name}</p>
            <div>
                <h4>Types:</h4>
                <p>{formPokemon?.types.map(type => type.type.name)}</p>
            </div>

        </div>
    );
};

export default PokemonFormComponentById;