import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";
import {pokemonActions} from "../../redux/slices/pokemonSlice";
import PokemonListComponent from "../../components/PokemonListComponent/PokemonListComponent";

const SearchPokemonPageByAbility = () => {
    const params = useParams();
    const name = String(params.name);

    const {pokemonByAbilityResult,} = useAppSelector(state => state.pokemonSearchSlice);
    const {pokemonResult, pokemonList} = useAppSelector(state => state.pokemonSliceState)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonSearchActions.loadPokemonByAbility(name));
    }, [dispatch, name]);

    useEffect(() => {
        const urlPokemon = pokemonByAbilityResult?.pokemon.map(pokemon => pokemon.pokemon.url);
        if (urlPokemon) dispatch(pokemonActions.loadPokemonList(urlPokemon));
        console.log(urlPokemon)
    }, [dispatch, pokemonResult, pokemonByAbilityResult?.pokemon]);
    return (
        <div>
            <div >
                {pokemonList.map(pokemon => <PokemonListComponent key={pokemon.id} pokemon={pokemon}/>)}
            </div>
        </div>
    );
};

export default SearchPokemonPageByAbility;
