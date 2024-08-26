import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";

const SearchPokemonPage = () => {
    const params = useParams();
    const name = String(params.name);

    const {pokemonByNameResult} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonSearchActions.loadPokemonByName(name));
    }, [dispatch,name]);

    return (
        <div>
            <Link to={`/${pokemonByNameResult?.id}`}>
                <div>
                    <h1>{pokemonByNameResult?.name}</h1>
                </div>
                <img
                    src={pokemonByNameResult?.sprites.front_default}
                    alt={`${pokemonByNameResult?.name} `}
                    loading={"lazy"}
                />
            </Link>

        </div>
    );
};

export default SearchPokemonPage;
