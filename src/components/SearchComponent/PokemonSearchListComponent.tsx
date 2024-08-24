import React, {FC, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";



const PokemonSearchListComponent = () => {
    const params = useParams()
    console.log(params.name)
    const name = params.name

    const {pokemonByNameResult} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (name) dispatch(pokemonSearchActions.loadPokemonByName(String(name)))
    })
    return (
        <div>
            <Link to={"/" + pokemonByNameResult?.id}>
                <img src={pokemonByNameResult?.sprites.front_default} alt={"pokemon imagine"} loading={"lazy"}/>
                <div>
                    <h1 >{pokemonByNameResult?.name}</h1>
                </div>
            </Link>

        </div>
    );
};

export default PokemonSearchListComponent;