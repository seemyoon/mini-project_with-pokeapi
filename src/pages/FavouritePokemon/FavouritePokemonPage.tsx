import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonActions} from "../../redux/slices/pokemonSlice";

const FavouritePokemonPage = () => {
    const dispatch = useAppDispatch()
    const {pokemon} = useAppSelector(state => state.pokemonSliceState)
    const getFavoritePokemon = localStorage.getItem("favouritePokemon")
    let getFavoritePokemonParse: { id: string, form: string } | null = null;

    if (getFavoritePokemon) {
        try {
            getFavoritePokemonParse = JSON.parse(getFavoritePokemon);
        } catch (error) {
            console.log(error)
        }
    }
    const id = getFavoritePokemonParse ? getFavoritePokemonParse.id : null;
    const form = getFavoritePokemonParse ? getFavoritePokemonParse.form : null;


    useEffect(() => {
        if (id) {
            dispatch(pokemonActions.loadPokemonById(String(id)));
        }
    }, [dispatch, id]);


    return (
        <div>
            <div>
                <h3>{pokemon?.name}</h3>
            </div>
            <div>
                {form === "default" ? (
                    <div>
                        <img src={pokemon?.sprites.front_default} alt={"front_default"}/>
                        <img src={pokemon?.sprites.back_default} alt={"back_default"}/>
                    </div>
                ) : form === "shiny" ? (
                    <div>
                        <img src={pokemon?.sprites.front_shiny} alt={"front_shiny"}/>
                        <img src={pokemon?.sprites.back_shiny} alt={"back_shiny"}/>
                    </div>
                ) : "Error"}
            </div>
        </div>

    );
};

export default FavouritePokemonPage;