import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PokemonFormListComponent from "../PokemonFormComponent/PokemonFormListComponent";
import {pokemonActions} from "../../redux/slices/pokemonSlice";

interface IProps {
    pokemonId: number | undefined
}

const PokemonFormComponent: FC<IProps> = ({pokemonId}) => {
    const dispatch = useAppDispatch();
    const {formPokemonList} = useAppSelector(state => state.pokemonSliceState);

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
