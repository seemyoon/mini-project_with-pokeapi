import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {pokemonSearchActions} from "../../../redux/slices/pokemonSearchSlice";
import styles from './SearchPokemonPageByName.module.css';

const SearchPokemonPageByName = () => {
    const params = useParams();
    const name = String(params.name);

    const {pokemonByNameResult} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonSearchActions.loadPokemonByName(name));
    }, [dispatch,name]);

    return (
        <div className={styles.container}>
            <Link to={`/${pokemonByNameResult?.id}`} className={styles.link}>
                <div>
                    <h1 className={styles.title}>{pokemonByNameResult?.name}</h1>
                </div>
                <img
                    className={styles.image}
                    src={pokemonByNameResult?.sprites.front_default}
                    alt={`${pokemonByNameResult?.name} `}
                    loading={"lazy"}
                />
            </Link>
        </div>
    );
};

export default SearchPokemonPageByName;
