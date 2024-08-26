import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { pokemonActions } from "../../redux/slices/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from './PokemonFormComponentById.module.css';

const PokemonFormComponentById = () => {
    const { formPokemon } = useAppSelector(state => state.pokemonSliceState);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            dispatch(pokemonActions.loadFormPokemon(Number(params.id)));
        }
    }, [dispatch, params.id]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{formPokemon?.name}</h2>
            <div className={styles.imageWrapper}>
                <img src={formPokemon?.sprites.front_default} alt={"form of pokemon"} className={styles.image} />
                <img src={formPokemon?.sprites.back_default} alt={"form of pokemon"} className={styles.image} />
            </div>
            <div className={styles.info}>
                <h4>Pokemon:</h4>
                <p>{formPokemon?.pokemon.name}</p>
            </div>
            <div className={styles.info}>
                <h4>Types:</h4>
                <p>{formPokemon?.types.map(type => type.type.name).join(', ')}</p>
            </div>
        </div>
    );
};

export default PokemonFormComponentById;
