import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {pokemonSearchActions} from "../../../redux/slices/pokemonSearchSlice";
import {pokemonActions} from "../../../redux/slices/pokemonSlice";
import PokemonListComponent from "../../../components/PokemonListComponent/PokemonListComponent";
import styles from './SearchPokemonPageByType.module.css';

const SearchPokemonPageByType = () => {
    const params = useParams();
    const name = String(params.name);

    const {pokemonByTypeResult} = useAppSelector(state => state.pokemonSearchSlice);
    const {pokemonResult, pokemonList} = useAppSelector(state => state.pokemonSliceState)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonSearchActions.loadPokemonByTypes(name));
    }, [dispatch, name]);

    useEffect(() => {
        const urlPokemon = pokemonByTypeResult?.pokemon.map(pokemon => pokemon.pokemon.url);
        if (urlPokemon) dispatch(pokemonActions.loadPokemonList(urlPokemon));
        console.log(urlPokemon)
    }, [dispatch, pokemonResult, pokemonByTypeResult?.pokemon]);
    return (
        <div className={styles.container}>
            {pokemonList.map(pokemon => (
                <PokemonListComponent key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
    );
};

export default SearchPokemonPageByType;
