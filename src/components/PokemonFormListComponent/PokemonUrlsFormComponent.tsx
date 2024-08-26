import React, { FC, useEffect, useState } from 'react';
import { IFormPokemon } from "../../models/IPokemon/IFormPokemon";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { pokemonActions } from "../../redux/slices/pokemonSlice";
import { Link } from "react-router-dom";
import styles from './PokemonUrlsFormComponent.module.css'; // Импортируем стили

interface IProps {
    pokemonForms: IFormPokemon[] | undefined
}

const PokemonUrlsFormComponent: FC<IProps> = ({ pokemonForms }) => {
    const [formUrls, setFormUrls] = useState<string[]>([]);
    const { urlForm } = useAppSelector(state => state.pokemonSliceState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pokemonForms && pokemonForms.length > 0) {
            const urls = pokemonForms.map(pokemon => pokemon.url);
            setFormUrls(urls);
        }
    }, [pokemonForms]);

    useEffect(() => {
        if (formUrls.length > 0) {
            dispatch(pokemonActions.loadFormPokemonByUrl(formUrls));
        }
    }, [formUrls, dispatch]);

    return (
        <div className={styles.container}>
            <ul>
                {urlForm?.map(form =>
                    <Link key={form.id} to={"/pokemonForm/" + form.id}>
                        <li>
                            <h5>{form.name}</h5>
                            <img src={form.sprites.front_default} alt="pokemon" />
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default PokemonUrlsFormComponent;
