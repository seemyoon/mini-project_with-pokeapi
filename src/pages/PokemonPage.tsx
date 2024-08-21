import React, {useEffect} from 'react';
import '../App.css';
import {pokemonActions, useAppDispatch, useAppSelector} from "../redux/store";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const {pokemonResult} = useAppSelector(state => state.pokemonPaginationResultSliceState)
    useEffect(() => {
        dispatch(pokemonActions.loadPokemonWithPagination());
    }, [dispatch]);
    return (
        <div>

        </div>
    );
};

export default PokemonPage;