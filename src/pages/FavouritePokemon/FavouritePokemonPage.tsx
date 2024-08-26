import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { pokemonActions } from "../../redux/slices/pokemonSlice";
import { Link } from "react-router-dom";
import styles from './FavouritePokemonPage.module.css';

type FavouritePokemonPageType = {
    id: string;
};

const FavouritePokemonPage = () => {
    const dispatch = useAppDispatch();
    const { favouritePokemon } = useAppSelector(state => state.pokemonSliceState);
    const [favoritePokemonItems, setFavouritePokemonItems] = useState<FavouritePokemonPageType[]>([]);

    useEffect(() => {
        const getFavoritePokemon = localStorage.getItem("favouritePokemon");
        if (getFavoritePokemon) {
            try {
                setFavouritePokemonItems(JSON.parse(getFavoritePokemon));
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    useEffect(() => {
        if (favoritePokemonItems.length > 0) {
            const idFavoritePokemonItems = favoritePokemonItems.map(pokemonItem => pokemonItem.id);
            dispatch(pokemonActions.loadFavouritePokemonById(idFavoritePokemonItems));
        }
    }, [dispatch, favoritePokemonItems]);

    const deleteFavoritePokemon = (pokemonId: string) => {
        const updatedFavorites = favoritePokemonItems.filter(item => item.id !== pokemonId);
        setFavouritePokemonItems(updatedFavorites);
        localStorage.setItem("favouritePokemon", JSON.stringify(updatedFavorites));
        if (updatedFavorites.length === 0) window.location.reload();
    };

    return (
        <div className={styles.container}>
            {favouritePokemon.map(pokemon => (
                <div key={pokemon.id} className={styles.card}>
                    <Link to={"/" + pokemon.id} className={styles.link}>
                        <img src={pokemon.sprites.front_default} alt={"pokemon imagine"} loading={"lazy"} />
                        <div>
                            <h1>{pokemon.name}</h1>
                        </div>
                    </Link>
                    <button onClick={() => deleteFavoritePokemon(String(pokemon.id))} className={styles.button}>
                        Delete Pokemon
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FavouritePokemonPage;
