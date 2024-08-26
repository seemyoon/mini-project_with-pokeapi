import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect, useState} from "react";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";
import {useNavigate} from "react-router-dom";

const SearchComponentByName = () => {
    const {pokemonByNameResult, error} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();


    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    useEffect(() => {
        if (pokemonByNameResult?.name) {
            navigate(`/searchPokemonPageByName/${pokemonByNameResult.name}`);
        } else if (error) {
            navigate(`/searchPokemonPageError/`);
        }
    }, [navigate, pokemonByNameResult, error]);

    const handleSearchClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (searchItem.trim()) await dispatch(pokemonSearchActions.loadPokemonByName(searchItem));

    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleItemChange}
                    placeholder="Search by Name"
                />
                <button onClick={handleSearchClick}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponentByName;