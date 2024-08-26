import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect, useState} from "react";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";
import {useNavigate} from "react-router-dom";

const SearchComponentByType = () => {
    const {pokemonByTypeResult, error} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();


    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    useEffect(() => {
        if (pokemonByTypeResult?.name) {
            navigate(`/searchPokemonPageByType/${pokemonByTypeResult.name}`);
        } else if (error) {
            navigate(`/searchPokemonPageError/`);
        }
    }, [navigate, pokemonByTypeResult, error]);

    const handleSearchClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (searchItem.trim()) await dispatch(pokemonSearchActions.loadPokemonByTypes(searchItem));

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

export default SearchComponentByType;

