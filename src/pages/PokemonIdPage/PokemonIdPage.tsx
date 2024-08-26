import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import PokemonFormComponent from "../../components/PokemonFormListComponent/PokemonUrlsFormComponent";
import { pokemonActions } from "../../redux/slices/pokemonSlice";
import styles from './PokemonIdPage.module.css';

const PokemonIdPage = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { pokemon } = useAppSelector(state => state.pokemonSliceState);

    useEffect(() => {
        if (params.id) {
            dispatch(pokemonActions.loadPokemonById(String(params.id)));
        }
    }, [dispatch, params.id]);

    const handleOfFavouritePokemon = () => {
        const obj = { id: params.id };
        const favouritePokemonArray = JSON.parse(localStorage.getItem("favouritePokemon") || "[]");

        const isAlreadyFavorite = favouritePokemonArray.some((pokemon: { id: string }) => pokemon.id === obj.id);

        if (!isAlreadyFavorite) {
            favouritePokemonArray.push(obj);
            localStorage.setItem("favouritePokemon", JSON.stringify(favouritePokemonArray));
        }

        const res = favouritePokemonArray.map((pokemon: { id: string }) => pokemon.id);
        console.log(res);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{pokemon?.name}</h2>
            </div>
            <div className={styles.imageContainer}>
                <img src={pokemon?.sprites.front_default} alt={"pokemon"} />
            </div>
            <div className={styles.info}>
                <h4>Ability:</h4>
                <ul>
                    {pokemon?.abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                </ul>
            </div>
            <div className={styles.info}>
                <h4>Stats:</h4>
                <ul>
                    {pokemon?.stats.map(stat => <li key={stat.stat.name}>{stat.stat.name}</li>)}
                </ul>
            </div>
            <div className={styles.info}>
                <h4>Types:</h4>
                <ul>
                    {pokemon?.types.map(type => <li key={type.type.name}>{type.type.name}</li>)}
                </ul>
            </div>
            <div className={styles.info}>
                <h4>Forms:</h4>
                <PokemonFormComponent key={pokemon?.id} pokemonForms={pokemon?.forms} />
            </div>
            <button onClick={handleOfFavouritePokemon} className={styles.button}>
                Add favourite pokemon
            </button>
        </div>
    );
};

export default PokemonIdPage;
