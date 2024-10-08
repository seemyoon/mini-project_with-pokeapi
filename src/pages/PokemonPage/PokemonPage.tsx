import React, {useEffect} from 'react';
import '../../App.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import PokemonListComponent from "../../components/PokemonListComponent/PokemonListComponent";
import styles from "./PokemonPageStyles.module.css"
import {pokemonActions} from "../../redux/slices/pokemonSlice";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const {pokemonResult, count, pokemonList} = useAppSelector(state => state.pokemonSliceState)
    const [searchParams] = useSearchParams()
    const queryOffset = searchParams.get("offset")


    useEffect(() => {
        dispatch(pokemonActions.loadPokemonWithPagination(queryOffset || "0"));
    }, [dispatch, queryOffset]);

    useEffect(() => {
        const urlPokemon = pokemonResult.map(pokemon => pokemon.url);
        dispatch(pokemonActions.loadPokemonList(urlPokemon));
    }, [dispatch, pokemonResult]);

    return (<section>
            <section className={styles.pokemonPage}>
                <div className={styles.pokemonList}>
                    {pokemonList.map(pokemon => <PokemonListComponent key={pokemon.id} pokemon={pokemon}/>)}
                </div>
                <PaginationComponent count={count}/>
            </section>
        </section>

    );
};

export default PokemonPage;