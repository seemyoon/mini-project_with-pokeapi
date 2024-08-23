import React, {FC, useEffect} from 'react';
import {pokemonActions, useAppDispatch, useAppSelector} from "../../redux/store";
import PokemonFormListComponent from "../PokemonFormComponent/PokemonFormListComponent";

interface IProps {
    pokemonId: number | undefined
}

const PokemonFormComponent: FC<IProps> = ({pokemonId}) => {
    const dispatch = useAppDispatch();
    const {formPokemonList} = useAppSelector(state => state.pokemonSliceState);

    console.log(formPokemonList)
    useEffect(() => {
        if (pokemonId) dispatch(pokemonActions.loadFormPokemon(pokemonId))
    }, [dispatch, pokemonId]);
    return (
        <div>
            <PokemonFormListComponent pokemonForm={formPokemonList} />
        </div>
    );
};

export default PokemonFormComponent;
