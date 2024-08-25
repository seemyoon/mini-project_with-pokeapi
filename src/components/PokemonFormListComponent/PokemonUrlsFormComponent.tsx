import React, {FC, useEffect, useState} from 'react';
import {IFormPokemon} from "../../models/IPokemon/IFormPokemon";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonActions} from "../../redux/slices/pokemonSlice";

interface IProps {
    pokemonForms: IFormPokemon[] | undefined
}

const PokemonUrlsFormComponent: FC<IProps> = ({pokemonForms}) => {
    const [formUrls, setFormUrls] = useState<string[]>([]);
    const {urlForm} = useAppSelector(state => state.pokemonSliceState)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (pokemonForms && pokemonForms.length > 0) {
            const urls = pokemonForms.map(pokemon => pokemon.url);
            setFormUrls(urls)
        }
    }, [pokemonForms]);

    useEffect(() => {
        if (formUrls.length > 0) {
            dispatch(pokemonActions.loadFormPokemonByUrl(formUrls));
        }
    }, [formUrls, dispatch]);
    return (
        <div>
            <h4>Forms:</h4>
            <ul>
                {urlForm?.map(form => <li key={form.id}>
                    <h5>{form.name}</h5>
                    <img src={form.sprites.front_default} alt="pokemon"/>
                </li>)}
            </ul>
        </div>
    );
};

export default PokemonUrlsFormComponent;
