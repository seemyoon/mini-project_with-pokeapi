import React, {useEffect} from 'react';
import '../App.css';
import {pokemonService} from "../services/api.service";

const PokemonPage = () => {
    useEffect(() => {
    console.log(pokemonService.getAllPokemon())
    }, []);

    return (
        <div>

        </div>
    );
};

export default PokemonPage;