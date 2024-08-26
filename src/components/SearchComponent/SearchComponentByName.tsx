import { useAppDispatch, useAppSelector } from "../../redux/store";
import React, {useEffect, useState} from "react";
import { pokemonSearchActions } from "../../redux/slices/pokemonSearchSlice";
import { useNavigate } from "react-router-dom";

const SearchComponentByName = () => {
    const { pokemonByNameResult, error } = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();


    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    useEffect(() => {
        if (searchItem && !(searchItem === "") ) dispatch(pokemonSearchActions.loadPokemonByName(searchItem));
    }, [dispatch, searchItem ]);

    useEffect(() => {
        if (pokemonByNameResult?.name) {
            navigate(`/searchPokemonPage/${pokemonByNameResult.name}`);
        } else if (error) {
            navigate(`/searchPokemonPageError/`);
        }
    }, [navigate, pokemonByNameResult, error]);

    const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (searchItem) {
            if (pokemonByNameResult?.name) {
                navigate(`/searchPokemonPage/${pokemonByNameResult.name}`);
            } else if (error) {
                navigate(`/searchPokemonPageError/`);
            }
        }
    };


    return (
        <div>
            <form>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleItemChange}
                    placeholder="Type to search"
                />
                <button onClick={handleSearchClick}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponentByName;
