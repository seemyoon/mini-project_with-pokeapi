import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {pokemonSearchActions} from "../../../redux/slices/pokemonSearchSlice";
import {pokemonActions} from "../../../redux/slices/pokemonSlice";
import PokemonListComponent from "../../../components/PokemonListComponent/PokemonListComponent";
import styles from './SearchPokemonPageByAbility.module.css';

const SearchPokemonPageByAbility = () => {
    const params = useParams();
    const name = String(params.name);

    const { pokemonByAbilityResult } = useAppSelector(state => state.pokemonSearchSlice);
    const { pokemonList } = useAppSelector(state => state.pokemonSliceState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonSearchActions.loadPokemonByAbility(name));
    }, [dispatch, name]);

    useEffect(() => {
        const urlPokemon = pokemonByAbilityResult?.pokemon.map(pokemon => pokemon.pokemon.url);
        if (urlPokemon) dispatch(pokemonActions.loadPokemonList(urlPokemon));
    }, [dispatch, pokemonByAbilityResult?.pokemon]);

    return (
        <div className={styles.container}>
            {pokemonList.map(pokemon => (
                <PokemonListComponent key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default SearchPokemonPageByAbility;
