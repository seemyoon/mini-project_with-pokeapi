import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect, useState} from "react";
import {pokemonSearchActions} from "../../redux/slices/pokemonSearchSlice";
import {useNavigate} from "react-router-dom";

const SearchComponentByAbility = () => {
    const {pokemonByAbilityResult, error} = useAppSelector(state => state.pokemonSearchSlice);
    const dispatch = useAppDispatch();
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();


    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    useEffect(() => {
        if (pokemonByAbilityResult?.name) {
            navigate(`/searchPokemonPageByAbility/${pokemonByAbilityResult.name}`);
        } else if (error) {
            navigate(`/searchPokemonPageError/`);
        }
    }, [navigate, pokemonByAbilityResult, error]);

    const handleSearchClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (searchItem.trim()) await dispatch(pokemonSearchActions.loadPokemonByAbility(searchItem));

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

export default SearchComponentByAbility;

