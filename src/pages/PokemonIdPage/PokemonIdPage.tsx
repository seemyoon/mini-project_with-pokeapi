import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PokemonFormComponent from "../../components/PokemonFormListComponent/PokemonFormComponent";
import {pokemonActions} from "../../redux/slices/pokemonSlice";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const PokemonIdPage = () => {
    const {toggleForm, chooseForm} = useAppSelector(state => state.pokemonFormSlice)
    const params = useParams()
    const dispatch = useAppDispatch()
    const {pokemon, pokemonResult} = useAppSelector(state => state.pokemonSliceState)

    useEffect(() => {
        if (params.id) {
            dispatch(pokemonActions.loadPokemonById(String(params.id)));
        }
    }, [dispatch, params.id]);


    const handleOfFavouritePokemon = () => {
        if (params.id && chooseForm) {
            const favouritePokemon = {
                id: params.id,
                form: chooseForm
            }
            localStorage.setItem("favouritePokemon", JSON.stringify(favouritePokemon));
        }
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <HeaderComponent/>*/}
            {/*</div>*/}
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites.front_default} alt={"pokemon"}/>
            <div>
                <h4>Ability:</h4>
                <ul>{pokemon?.abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}</ul>
            </div>
            <div>
                <h4>Stats:</h4>
                <ul>{pokemon?.stats.map(stat => <li key={stat.stat.name}>{stat.stat.name}</li>)}</ul>
            </div>
            <div>
                <h4>Types</h4>

                <ul>{pokemon?.types.map(type => <li key={type.type.name}>{type.type.name}</li>)}</ul>
            </div>
            <PokemonFormComponent key={pokemon?.id} pokemonId={pokemon?.id}/>
            <hr/>

            {toggleForm ? (
                <div>
                    {chooseForm === "default" ? (
                        <div>
                            <img src={pokemon?.sprites.front_default} alt={"front_default"}/>
                            <img src={pokemon?.sprites.back_default} alt={"back_default"}/>
                        </div>
                    ) : chooseForm === "shiny" ? (
                        <div>
                            <img src={pokemon?.sprites.front_shiny} alt={"front_shiny"}/>
                            <img src={pokemon?.sprites.back_shiny} alt={"back_shiny"}/>
                        </div>
                    ) : "Error"}
                </div>
            ) : null}

            <button disabled={!toggleForm} onClick={handleOfFavouritePokemon}>Add favourite pokemon</button>
        </div>
    );
};

export default PokemonIdPage;

